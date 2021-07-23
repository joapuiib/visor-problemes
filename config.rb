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

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true
helpers do 
  def markdown(text=nil)
    text ||= yield
    return Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true).render(text)
  end
end
