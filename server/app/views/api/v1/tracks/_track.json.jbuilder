json.id @track.id
json.artist_id @track.artist_id
json.artist @track.artist.username
json.title @track.title
json.permalink @track.permalink
json.genre @track.genre
json.tags @track.tags
json.is_private @track.is_private
json.metadata @track.metadata
json.permissions @track.permissions
json.cover_image polymorphic_url(@track.cover_image) if @track.cover_image.attached?
json.audio_file polymorphic_url(@track.audio_file) if @track.audio_file.attached?
