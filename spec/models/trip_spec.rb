require 'rails_helper'

RSpec.describe Trip, :type => :model do
  subject {
    described_class.new(
      user_id: 1,
      description: "blabla",
      name: "paris",
      start_date: 1,
      end_date: 11,
      public: false,
      photo: "http://stackoverflow.com/questions/10215516/create-model-in-rails-console-with-association"
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

    it "is not valid without an user_id" do
      subject.user_id = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should have_many(:locations) }
    it { should have_many(:comments) }
    it { should belong_to(:user) }
  end
end
