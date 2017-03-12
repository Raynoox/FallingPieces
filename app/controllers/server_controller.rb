class ServerController < WebsocketRails::BaseController
  def initialize_session
        logger.info("initialization")
    # perform application setup here
    controller_store[:message_count] = 0
  end
  def join_game
    logger.info("player joined")
  end
  def client_connected
    logger.info("player connecting")
    controller_store[:message_count] = 1
  end
end
