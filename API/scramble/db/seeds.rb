15.times do
	User.create({
		first_name: Faker::Name.first_name,
		last_name: Faker::Name.last_name,
		city: Faker::Address.city,
		state: Faker::Address.state,
		postal_code: Faker::Number.number(5),
		email: Faker::Internet.free_email
	})
end

15.times do 
	GolfCourse.create({
		title: Faker::Space.galaxy,
		street_address: Faker::Address.street_name,
		city: Faker::Address.city,
		state: Faker::Address.state,
		postal_code: Faker::Number.number(5),
		website_link: Faker::Internet.url
	})
end

15.times do
	PastRound.create({
		golf_course_id: Faker::Number.between(1,14),
		user_id: Faker::Number.between(1,9),
		score: Faker::Number.number(2),
		date: Faker::Date.backward(365)
	})
end

5.times do 
	CompetitionType.create({
		title: Faker::Commerce.material,
		description: Faker::Lorem.sentence
	})
end

15.times do
	PaymentType.create({
		user_id: Faker::Number.between(1,19),
		title: Faker::Food.dish,
		card_number: Faker::Number.number(16),
		name_on_card: Faker::Seinfeld.character,
		csc: Faker::Number.number(3)
	})
end


15.times do 
	Competition.create({
		title: Faker::Commerce.material,
		description: Faker::Lorem.sentence,
		date: Faker::Date.forward(200),
		time: Faker::Time.forward(23, :morning),
		entry_fee: Faker::Commerce.price,
		contact_email: Faker::Internet.free_email,
		competition_type_id: Faker::Number.between(1,4),
		golf_course_id: Faker::Number.between(1,14),
		user_id: Faker::Number.between(1,19)
	})
end

20.times do
	CompetitionUserJoin.create({
		competition_id: Faker::Number.between(1,14),
		user_id: Faker::Number.between(1,14)
	})
end

10.times do
	Prize.create({
		competition_id: Faker::Number.between(1,4),
		title: Faker::RockBand.name,
		description: Faker::Lorem.sentence
	})
end




