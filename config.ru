require "rack/jekyll"

# Middleware
use Rack::ShowStatus      # Nice looking 404s and other messages
use Rack::ShowExceptions  # Nice looking errors

run Rack::Jekyll.new(:destination => 'public')