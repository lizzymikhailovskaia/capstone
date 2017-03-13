require 'rails_helper'

RSpec.describe Comment, :type => :model do
  subject {
    described_class.new(
      trip_id: 1,
      location_id: 2,
      user_id: 1,
      name: "bla",
      text: "wooow2bla"
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

    it "is not valid without an trip_id" do
      subject.trip_id = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an location_id" do
      subject.location_id = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an user_id" do
      subject.user_id = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:trip) }
    it { should belong_to(:location) }
    it { should belong_to(:user) }
  end
end
