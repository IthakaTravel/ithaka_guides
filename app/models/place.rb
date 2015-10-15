class Place < ActiveRecord::Base
    CURRENCY_LIST = ["INR", "USD", "TBH"]

    has_many :children, class_name: "Place", foreign_key: "parent_id"
    belongs_to :parent, class_name: "Place"
    belongs_to :source, class_name: "Place"
    has_many :place_activities
    has_many :activities, through: :place_activities

    validates :name, uniqueness: true, presence: true, length: { maximum: 30 }
    validates :description, presence: true, length: { maximum: 70 }
    validates :price, presence: true, numericality: { only_integer: true }
    validates :place_type, presence: true, inclusion: { in: %w(area country) }
    validates :currency, presence: true, inclusion: { in: CURRENCY_LIST }
end
