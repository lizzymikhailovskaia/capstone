require 'rails_helper'

RSpec.describe Photo, :type => :model do
  subject {
    described_class.new(
      file: "new_file",
      location_id: 1
    )
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a file" do
      subject.file = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a location_id" do
      subject.location_id = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:location) }
  end
end
