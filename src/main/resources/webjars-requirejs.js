/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    paths: { "hellojs": webjars.path("hellojs", "main") },
    shim: { "jquery": ["jquery"] }
});
