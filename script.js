//* TITLE Right Column Sidebar **//
//* VERSION 1.0 **//
//* DESCRIPTION  **//
//* DEVELOPER RagdollDark **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.right_column_sidebar = new Object({

	running: false,

	preferences: {
		"dashonly": {
			"text": "Only run on the dashboard",
			"default": false,
			"value": false
		}
	},

	run: function() {
		// XKit initialization
		XKit.tools.init_css("right_column_sidebar");
		this.running = true;
		
		// check if the user wants it to run only on the dashboard
		movesidebar = true;
		if (XKit.extensions.right_column_sidebar.preferences.dashonly.value === true) {
			if (document.location.href.indexOf('://www.tumblr.com/dashboard') === -1) {
				movesidebar = false;
			}
		}
		if (movesidebar) {
			// find the account menu
			accountmenu = document.getElementsByClassName("popover-menu-item")[0];
			
			// find the sidebar to put the menu in
			sidebar = document.getElementById("right_column");
			
			// add a class to the menu so it can be removed if the extension is disabled
			accountmenu.childNodes[0].classList.add("right_column_sidebar");
			
			// move the menu to the sidebar
			sidebar.insertBefore(accountmenu.childNodes[0], sidebar.firstChild);
			
			// remove the account button since the menu has been moved
			// account.style.display = "none";
			
		}
	},

});
