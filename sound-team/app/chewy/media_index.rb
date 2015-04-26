class MediaIndex < Chewy::Index

  define_type Media.includes(:album, :component, :categories) do
    field :name
    field :kind
    field :album,      value: ->(media){ media.album.name }
    field :categories, value: ->(media){ media.categories.map(&:name) }
    field :component,  value: ->(media){ media.component.name }
  end

end