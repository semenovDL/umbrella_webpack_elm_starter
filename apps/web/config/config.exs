# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :web,
  namespace: AppTemplate.Web

# Configures the endpoint
config :web, AppTemplate.Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "IQQiCc1eo/jNa9IrflRPWmsrSlZlZb97SAL1ZMyxt8MIPINPMe/cqOU4lsjX7/PV",
  render_errors: [view: AppTemplate.Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: AppTemplate.Web.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
