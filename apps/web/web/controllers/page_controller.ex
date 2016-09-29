defmodule AppTemplate.Web.PageController do
  use AppTemplate.Web.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
