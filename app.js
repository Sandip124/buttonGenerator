const ButtonGenerator = (fonts = [],colors = []) =>{
    return {
        Init:(elm) =>{
            const displayElement = document.querySelector(elm);
            console.log(displayElement);
            displayElement.innerHTML = "<p>this is paragraph.</p>";
            console.log("hie");
        }
    };
};