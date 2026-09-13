import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  var [technologies, setTechnologies] = useState([]);
  var [stack, setStack] = useState([]);
  var [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("/data/technologies.json")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Could not load technology data");
        }
        return response.json();
      })
      .then(function (data) {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Could not load technology data.");
        setLoading(false);
      });
  }, []);

  function addToStack(technology) {
    var exists = stack.some(function (item) {
      return item.id === technology.id;
    });

    if (exists) {
      toast.warning(technology.name + " is already in your stack.");
      return;
    }

    setStack(function (current) {
      return current.concat(technology);
    });
    toast.success(technology.name + " added to your stack.");
  }

  function removeFromStack(id) {
    var removed = stack.find(function (item) {
      return item.id === id;
    });

    setStack(function (current) {
      return current.filter(function (item) {
        return item.id !== id;
      });
    });

    if (removed) {
      toast.info(removed.name + " removed from your stack.");
    }
  }

  function removeAll() {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  }

  return (
    <div className="site-shell">
      <Navbar />
      <Hero />

      <main>
        <section className="technology-section" id="technologies">
          <div className="section-intro">
            <span className="eyebrow">BUILD YOUR STACK</span>
            <h1>
              Choose the right <span>technologies</span>
            </h1>
            <p>
              Explore practical tools and select the technologies that fit
              your next project.
            </p>
          </div>

          {loading ? (
            <div className="loading-box" aria-live="polite">
              <span className="spinner"></span>
              <span>Loading technologies...</span>
            </div>
          ) : (
            <div className="stack-layout">
              <div className="technology-grid">
                {technologies.map(function (technology) {
                  return (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={stack.some(function (item) {
                        return item.id === technology.id;
                      })}
                      onAdd={addToStack}
                    />
                  );
                })}
              </div>

              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2200}
        theme="dark"
        newestOnTop
      />
    </div>
  );
}

export default App;