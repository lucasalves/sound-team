module MediaHelper
  def screenshot(media, options={})
    path = '/assets/images/no-image.png'
    if !media.information[:image].nil?
        path = media.information[:image][:img_320x180]
    end
    image_tag(path, options)
  end
end
