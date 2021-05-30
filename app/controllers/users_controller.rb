class UsersController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json { render json: { items: User.all } }
    end
  end

  def create
    render json: {response: 'good post'}
  end
end
