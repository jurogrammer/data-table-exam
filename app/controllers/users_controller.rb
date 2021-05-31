class UsersController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json do
        render json: { items: User.all }
      end
    end
  end

  def create
    render json: {response: 'good post'}
  end
end
