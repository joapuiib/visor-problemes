# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload
# activate :sprockets

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :relative_links, true

configure :build do
  set :build_dir, 'build'
  set :base_url, 'visor-problemes'
  activate :relative_assets
end

activate :external_pipeline,
   name: :webpack,
   command: build? ? 'npm run build' : 'npm run start',
   source: '.dist',
   latency: 1

set :js_dir, 'javascripts'
set :css_dir, 'stylesheets'
set :fonts_dir, 'fonts'

activate :syntax
set :markdown, fenced_code_blocks: true, input: "GFM", :tables => true, math_engine: "katex"

ignore 'templates/*'
ignore 'components/*'

require "lib/config_helpers"
include ConfigHelpers

require "lib/helpers"
helpers Helpers

problems = load_problems("problemes", @app.data.problemes)
problems.each do |ruta, obj|
  proxy "#{ruta}.html", "/templates/problem.html", :layout => "layout", :locals => { :problem => obj }
end
set :problems, problems
