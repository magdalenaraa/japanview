addEventListener('DOMContentLoaded', (event) => {
  
    function showTabs(ids, index) {
      
      // Convert ids to array if needed
      if ( Array.isArray(ids) == false ) {
        ids = new Array(ids);
      }
      // For each tab container there is
      ids.forEach( ( id ) => {
        
        let container = document.getElementById(id);
        
        if ( container ) {
          
          let tabs = container.querySelectorAll( ".tab" );
          let tabContents = container.querySelectorAll( ".tabContent" );
          
          // If tabs and contents count differs, we want smaller number, otherwise we run out of bounds.
          let maxIterate = Math.min(tabs.length, tabContents.length);
          //console.log(maxIterate);
  
          // If selected tab has bigger nuber than we can give
          index = index > maxIterate ? maxIterate : index;
          
          for ( let i = 0; i < maxIterate; i++ ) {
            let tab = tabs[i];
            let content = tabContents[i];
  
            tab.classList.remove("active");
            content.style.display = "none";
            content.style.visibility = "hidden";
  
            tabs[i].onclick = function() { showTabs(id, i) };
  
            if ( i == index ) {
              tab.classList.add("active");
              content.style.display = "flex";
              content.style.visibility = "visible";
            }
          }
        }
      });
    }
    showTabs("tabs1", 2);
    showTabs(["tabs2", "tabs3"], 0);
  
  });