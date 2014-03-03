module ApplicationHelper
    def menu_item_is_activated? path, class_style=""
        "#{class_style} #{(current_page?(path) ? 'active' : '')}"
    end
end
