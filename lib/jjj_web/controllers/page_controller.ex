defmodule JjjWeb.PageController do
  use JjjWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
