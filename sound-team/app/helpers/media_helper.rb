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

  def dimensions(media)
    if !media.information.nil? && !media.information[:dimensions].nil?
      return media.information[:dimensions][:width].to_s + " x " + media.information[:dimensions][:height].to_s
    end
  end

  def duration(media)
    if !media.information.nil? && !media.information[:duration].nil?
      return media.information[:duration]
    end
  end
end
