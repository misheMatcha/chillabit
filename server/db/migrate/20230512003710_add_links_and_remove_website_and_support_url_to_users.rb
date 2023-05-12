class AddLinksAndRemoveWebsiteAndSupportUrlToUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :website
    remove_column :users, :support_url
    add_column :users, :links, :jsonb, array: true, default: []
  end
end
