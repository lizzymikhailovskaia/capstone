require 'rails_helper'

RSpec.describe User, :type => :model do
  subject {
    described_class.new(
      name: "Anny",
      email: "anny@anny.com",
      password: "password",
      public: true,
      bio: "blablabla",
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

    it "is not valid without an email" do
      subject.email = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a password" do
      subject.password = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should have_many(:trips) }
    it { should have_many(:comments) }
  end
end
