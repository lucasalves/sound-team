module MediaHelper
  def screenshot(media, options={})
    options[:default] ||= '/assets/no-image.png'

    path = options[:default]
    if !media.information.nil? && !media.information[:image].nil?
      path = media.information[:image][:img_320x180]
    end
    image_tag(path, options)
  end

  def screenshot_by_kind(media, options={})
    case media.kind
    when 'song'
      options[:default] ||= 'no-image-music.png'
    end
    screenshot(media, options)
  end
end
