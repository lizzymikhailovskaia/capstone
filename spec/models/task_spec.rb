require 'rails_helper'

RSpec.describe Task, :type => :model do
  subject {
    described_class.new(
      location_id: 1,
      position: "blabla",
      name: "lets go to movie"
      )
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an location_id" do
      subject.location_id = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:location) }
  end
end
