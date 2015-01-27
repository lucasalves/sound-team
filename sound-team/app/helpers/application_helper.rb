module ApplicationHelper
    def menu_item_is_activated? path, class_style=""
      "#{class_style} #{(current_page?(path) ? 'active-link' : '')}"
    end

    def title(page_title)
      content_for(:title){ page_title }
    end
end
