Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000', 'https://chillabit.netlify.app'

    resource '*',
             headers: :any,
             methods: %i[get post put patch delete]
  end
end
