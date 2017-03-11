class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title
      t.numeric :players

      t.timestamps
    end
  end
end
