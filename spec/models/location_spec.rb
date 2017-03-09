require 'rails_helper'

RSpec.describe Location, :type => :model do
  subject {
    described_class.new(
      trip_id: 1,
      description: "blabla1bla",
      name: "china",
      start_date: 1,
      end_date: 11,
      adress: "2bla"
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
  end

  describe "Associations" do
    it { should have_many(:tasks) }
    it { should have_many(:photos) }
    it { should have_many(:comments)}
    it { should belong_to(:trip) }
  end
end
