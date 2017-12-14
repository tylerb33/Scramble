# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171214160427) do

  create_table "competition_types", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "competition_users", force: :cascade do |t|
    t.integer "competition_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "payment_type_id"
    t.string "team_name"
    t.integer "team_average_score"
    t.index ["competition_id"], name: "index_competition_users_on_competition_id"
    t.index ["user_id"], name: "index_competition_users_on_user_id"
  end

  create_table "competitions", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "competition_type_id"
    t.integer "golf_course_id"
    t.integer "user_id"
    t.string "date"
    t.string "time"
    t.string "contact_email"
    t.integer "entry_fee"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["competition_type_id"], name: "index_competitions_on_competition_type_id"
    t.index ["golf_course_id"], name: "index_competitions_on_golf_course_id"
    t.index ["user_id"], name: "index_competitions_on_user_id"
  end

  create_table "golf_courses", force: :cascade do |t|
    t.string "title"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.string "website_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
  end

  create_table "past_rounds", force: :cascade do |t|
    t.integer "golf_course_id"
    t.integer "user_id"
    t.integer "score"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["golf_course_id"], name: "index_past_rounds_on_golf_course_id"
    t.index ["user_id"], name: "index_past_rounds_on_user_id"
  end

  create_table "payment_types", force: :cascade do |t|
    t.integer "user_id"
    t.string "title"
    t.bigint "card_number"
    t.string "name_on_card"
    t.integer "csc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_payment_types_on_user_id"
  end

  create_table "prizes", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "competition_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["competition_id"], name: "index_prizes_on_competition_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
