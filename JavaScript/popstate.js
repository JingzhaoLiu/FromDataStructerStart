    pushHistory();

    window.addEventListener(
      "popstate",
      function(e) {
        window.location = window.location.href;
      },
      false
    );

    function pushHistory(){
      const state = {
        title: 'sort',
        url: ''
      }
     if (window.history?.state?.title !== "sort") {
       window.history.pushState(state, state.title, state.url);
     }

    }