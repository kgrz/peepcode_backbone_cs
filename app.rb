require 'json'
require 'sinatra'


get '/' do
  File.read('views/index.html')
end

get '/albums' do
  content_type "application/json"
  File.readlines("public/public.json")
end
