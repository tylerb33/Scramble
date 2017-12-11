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
 
GolfCourse.create({
	title: "McCabe Golf Course",
	street_address: "4601 Murphy Rd.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37209",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.1400273,
	longitude: -86.8448806
})

GolfCourse.create({
	title: "Harpeth Hills Golf Course",
	street_address: "2424 Old Hickory Blvd.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37221",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.0536748,
	longitude: -86.8855098
})

GolfCourse.create({
	title: "Percy Warner Golf Course",
	street_address: "1221 Forrest Park Dr.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37205",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.0838649,
	longitude: -86.8719913
})

GolfCourse.create({
	title: "Ted Rhodes Golf Course",
	street_address: "1901 Ed Temple Blvd.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37208",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.184592,
	longitude: -86.8269675
})

GolfCourse.create({
	title: "Two Rivers Golf Course",
	street_address: "2235 2 Rivers Pkwy.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37214",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.1902417,
	longitude: -86.6860825
})

GolfCourse.create({
	title: "Shelby Golf Course",
	street_address: "2021 Fatherland St.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37206",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.1733378,
	longitude: -86.7361925
})

GolfCourse.create({
	title: "Huntingburg Country Club",
	street_address: "739 W 3rd St.",
	city: "Huntingburg",
	state: "Indiana",
	postal_code: "47542",
	website_link: "https://www.golfnow.com/courses/1030282-huntingburg-country-club-details",
	latitude: 38.2946272,
	longitude: -86.9749989
})

GolfCourse.create({
	title: "Vinny Links Golf Course",
	street_address: "2009 Sevier St.",
	city: "Nashville",
	state: "Tennessee",
	postal_code: "37206",
	website_link: "http://www.nashville.gov/Parks-and-Recreation/Golf-Courses",
	latitude: 36.1651143,
	longitude: -86.739001
})

15.times do
	PastRound.create({
		golf_course_id: Faker::Number.between(1,14),
		user_id: Faker::Number.between(1,9),
		score: Faker::Number.number(2),
		date: Faker::Date.backward(365)
	})
end

CompetitionType.create({
	title: "1 Person Tournament",
	description: "Every man/woman for themselves. Lowest score wins."
})

CompetitionType.create({
	title: "2 Person Scramble",
	description: "2 person team. Each player hits a tee shot, then the two, three or four players discuss and decide which of the shots they think is the best shot, or best ball, and all play their next shot from that spot."
})

CompetitionType.create({
	title: "4 Person Scramble",
	description: "4 person team. Each player hits a tee shot, then the two, three or four players discuss and decide which of the shots they think is the best shot, or best ball, and all play their next shot from that spot."
})

CompetitionType.create({
	title: "Best Ball",
	description: "4 person team. Everyone plays every hole, each team takes its lowest score per hole."
})

CompetitionType.create({
	title: "Skins",
	description: "Each hole is worth one 'skin' and whoever wins the hole gets the skin."
})

15.times do
	PaymentType.create({
		# user_id: 20,
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
		golf_course_id: Faker::Number.between(1,8)
		# user_id: Faker::Number.between(1,19)
	})
end

20.times do
	CompetitionUser.create({
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




