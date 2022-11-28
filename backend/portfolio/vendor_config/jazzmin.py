JAZZMIN_SETTINGS = {
    # title of the window
    "site_title": "Portfolio Admin",
    # Title on the brand, and the login screen (19 chars max)
    "site_header": "Cbedroid Portfolio",
    # square logo to use for your site, must be present in static files, used for favicon and brand on top left
    "site_logo": "asset/site-logo.png",
    # Welcome text on the login screen
    "welcome_sign": "Welcome to Cbedroid Portfolio",
    # Copyright on the footer
    "copyright": "CMB Technologies and Consultant LLC",
    # The model admin to search from the search bar, search bar omitted if excluded
    "search_model": "users.User",
    # Order the auth app before the other app, other apps will be alphabetically placed after these
    "order_with_respect_to": ["users", "account_profile", "account", "core", "auth"],
    # Custom icons for side menu apps/models
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
        "authtoken.tokenproxy": "fas fa-key",
        "account_profile.newsletter": "fa fa-newspaper",
        "account_profile.profile": "fa fa-users-cog",
        "account.emailaddress": "fas fa-envelope",
        "core.project": "fas fa-project-diagram",
        "core.resume": "fas fa-file-pdf",
        "core.skill": "fas fa-tools",
        "core.technology": "far fa-lightbulb",
        "sites.site": "fas fa-globe",
        "users.user": "fa fa-user",
        "users.socialmedia": "fa fa-thumbs-up",
        "users.userprofile": "fa fa-id-card",
    },
    # Icons that are used when one is not manually specified
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    # Relative paths to custom CSS/JS scripts (must be present in static files)
    "custom_css": None,
    "custom_js": None,
    # Whether to show the UI customizer on the sidebar
    "show_ui_builder": False,
}
