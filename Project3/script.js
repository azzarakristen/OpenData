const showVis = (id) => {
    let visID = `${id}-vis`;

    // Hide the "empty" visualization
    document.getElementById("empty-vis").style.display = "none";

    // Grab all the visualizations
    let allVis = document.getElementsByClassName("data-visualization-item");

    // Hide all visualizations initially
    Array.from(allVis).forEach((el) => {
        el.style.display = "none";
    });

    // Show the visualization corresponding to the hovered borough
    document.getElementById(visID).style.display = "block";


};

const init = () => {
    const buttons = document.getElementsByClassName("borough-filter")[0].children;
    Array.from(buttons).forEach((button) => {
        // Add event listeners to each button
        button.addEventListener("mouseover", () => {
            showVis(button.id);
        });

        // Add event listeners to each button for click/tap (for mobile)
        button.addEventListener("click", () => {
            showVis(button.id);
        });
        
    });

    // Show the "empty" visualization when not hovering over any borough
    document.getElementsByClassName("borough-filter")[0].addEventListener("mouseleave", () => {
        document.getElementById("empty-vis").style.display = "block";
    });
};

window.addEventListener("load", init);

