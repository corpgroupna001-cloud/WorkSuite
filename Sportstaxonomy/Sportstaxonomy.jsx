import { useState, useMemo, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   COMPLETE SPORTS & OUTDOORS RETAIL TAXONOMY
   5,000+ Product-Level Categories
   ═══════════════════════════════════════════════════════════════ */

const RAW_TAXONOMY = {
  "🏏 Team Sports": {
    "Cricket": {
      "Bats": ["English Willow Gr1 Premium","English Willow Gr2","English Willow Gr3","Kashmir Willow","Junior Size 0","Junior Size 1","Junior Size 2","Junior Size 3","Junior Size 4","Junior Size 5","Junior Size 6","Tennis Ball Bat","Tape Ball Bat","Training/Practice Bat","Custom Signed Bat","Women's Bat"],
      "Balls": ["Red Leather Match","White Leather Match","Pink Leather Day-Night","Practice Leather","Tennis Cricket Ball","Rubber Cricket Ball","Tape Ball","Foam Cricket Ball","Laceball"],
      "Stumps & Bails": ["Wooden Stumps Full","Wooden Stumps Junior","LED Stumps","Steel Stumps","Ground Spike Stumps","Wooden Bails","LED Bails","Complete Stump Set","Stump Bag"],
      "Batting Protective Gear": ["Batting Pads Men's","Batting Pads Women's","Batting Pads Junior","Batting Gloves Men's","Batting Gloves Women's","Batting Gloves Junior","Inner Gloves","Helmet Adult Full","Helmet Titanium Grill","Helmet Junior","Abdominal Guard Men's","Abdominal Guard Junior","Arm Guard","Elbow Guard","Thigh Guard Outer","Thigh Guard Inner","Chest Guard","Rib Guard","Back Protector","Knee Guard","Ankle Guard"],
      "Wicketkeeping Gear": ["WK Pads Men's","WK Pads Junior","WK Gloves Men's","WK Gloves Junior","WK Inner Gloves"],
      "Footwear": ["Spikes Rubber Sole","Spikes Metal","Half-Spike Shoes","Non-Spike Trainer","WK Shoes","Junior Cricket Shoes"],
      "Apparel": ["Test Whites Long Sleeve","Test Whites Short Sleeve","Cricket Trousers Whites","ODI Jersey Men's","T20 Jersey Men's","Training T-Shirt","Training Polo","Sweater Wool V-Neck","Sweater Acrylic","Cricket Cap Traditional","Sunhat","Compression Shirt","Compression Shorts","Training Shorts","Cricket Socks","Warm-Up Jacket","Tracksuit","Rain Jacket","Women's Cricket Shirt","Women's Trousers","Junior Kit Set"],
      "Accessories": ["Bat Grip Octopus","Bat Grip Chevron","Grip Cone Applicator","Bat Fiber Tape","Bat Face Protector","Anti-Vibration Insert","Wristband","Headband","Zinc Sunscreen Stick","Cricket Sunglasses UV","Arm Sleeve UV","Scorebook","Umpire Counter","Toss Coin","Run Scorer Mechanical"],
      "Training Equipment": ["Bowling Machine Electric","Auto-Feed Bowling Machine","Batting Tee","Sidearm Thrower","Slip Catching Cradle","Rebound Net","Catching Net","Batting Cage Net","Reaction Ball","Swing Training Ball","Bowling Target","Speed Training Sled"],
      "Bags & Storage": ["Kitbag Wheelie Large","Kitbag Wheelie Medium","Kitbag Duffle","Cricket Backpack","Bat Cover Single","Bat Cover Double","Helmet Bag","Ball Bag","Junior Kitbag"],
      "Maintenance": ["Bat Linseed Oil","Bat Knocking Mallet","Bat Knocking Machine","Ball Polish Cloth","Bat Repair Kit","Boot Stud Replacement","Grip Remover Tool"],
      "Electronics": ["Performance Tracker Wearable","Smart Bat Sensor","Speed Radar Gun","Video Analysis System","Electronic Scoreboard","Action Camera Mount"]
    },
    "Football (Soccer)": {
      "Balls": ["Match Ball FIFA Quality Pro","Match Ball FIFA Quality","Training Ball Size 5","Training Ball Size 4","Training Ball Size 3","Junior Ball Size 2","Junior Ball Size 1","Mini Skills Ball","Futsal Ball","Beach Soccer Ball","Foam Safety Ball","Indoor Ball","Weighted Training Ball","Smart Sensor Football"],
      "Goals & Posts": ["Full Size Goal 7.32m×2.44m","Portable Full Size Goal","5-a-Side Goal","7-a-Side Goal","Futsal Goal","Mini Training Goal","Pop-Up Goal Set","Rebounder Net","Goal Post Pads","Replacement Net Full","Corner Flags Set","Boundary Flags","Field Markers Disc","Line Marking Spray"],
      "Protective Gear": ["Shin Guards Slip-In Adult","Shin Guards Ankle Sleeve Adult","Shin Guards Junior","Shin Guard Stays","GK Gloves Match","GK Gloves Training","GK Gloves Junior","GK Knee Pads","GK Elbow Pads","GK Shorts Padding","Goalpost Impact Pads"],
      "Footwear": ["Boots Firm Ground Adult","Boots Soft Ground Adult","Boots Artificial Ground Adult","Boots Multi-Ground Adult","Boots Indoor/Futsal Adult","Boots FG Junior","Boots AG Junior","Boots MG Junior","Boots Futsal Junior","Goalkeeper Boots","Training Shoes/Flats","Recovery Slides"],
      "Apparel": ["Match Jersey Home","Match Jersey Away","Training Jersey","Compression Jersey","Match Shorts","Training Shorts","Compression Shorts","Match Socks","Training Socks","GK Match Jersey","GK Training Jersey","GK Shorts","GK Socks","Tracksuit Top","Tracksuit Bottoms","Training Hoodie","Rain Jacket","Warm-Up Jacket","Bibs/Vests Set 10","Thermal Baselayer","Snood/Neck Warmer","Captain's Armband","Beanie","Women's Jersey","Women's Shorts","Kids' Kit Set"],
      "Referee Equipment": ["Referee Shirt","Referee Shorts","Referee Socks","Referee Whistle","Referee Flag Set","Referee Card Red/Yellow","Referee Watch Timer"],
      "Training Equipment": ["Cones Flat Disc 20-Pack","Cones Tall 20-Pack","Agility Ladder 10-Rung","Low Agility Hurdles 10","Speed Hurdles Medium 10","Dribbling Poles Set","Rebounder Board Solo","Shooting Target Net","Training Mannequin Set","Reaction Ball","Running Parachute","Resistance Bands Set","Weighted Vest","GPS Training Vest Biometric","Ball Return Net","Shot Arc","Kick Return Net"],
      "Bags & Storage": ["Kitbag Large","Kitbag Medium","Football Backpack","Boot Bag","Ball Net Bag 10","Ball Net Bag 20"],
      "Maintenance": ["Boot Cleaning Kit","Stud Removal Tool","Stud Set FG Replacement","Stud Set SG Replacement","Waterproofing Spray","Leather Boot Conditioner","Ball Pump Electric","Ball Pump Manual","Pump Needle Pack"],
      "Electronics": ["GPS Performance Tracker","Smart Football Sensor","Video Analysis Camera","Speed Radar Gun","Electronic Scoreboard"]
    },
    "Rugby (Union & League)": {
      "Balls": ["Union Ball Size 5 Match","Union Ball Training","League Ball Match","Tag Rugby Ball","Touch Rugby Ball","Mini Ball","Junior Size 3","Junior Size 4"],
      "Goals & Posts": ["Post Pad Set Pair","Training Posts Portable","Kicking Tee Standard","Kicking Tee Low Profile","Corner Flag Set Rugby"],
      "Protective Gear": ["Scrum Cap/Head Guard","Shoulder Pads Under Jersey","Body Armour Full","Body Armour Vest","Mouthguard Senior","Mouthguard Junior","Boil & Bite Mouthguard","Ankle Brace","Knee Support","Shin Guards Rugby","Elbow Pad"],
      "Footwear": ["Boots Firm Ground","Boots Soft Ground","Boots Multi-Stud","Junior Rugby Boots"],
      "Apparel": ["Match Jersey","Training Jersey","Match Shorts","Training Shorts","Rugby Socks","Compression Shorts","Baselayer Top","Tracksuit","Rain Jacket","Women's Jersey","Kids' Kit"],
      "Training Equipment": ["Tackle Bag Single","Tackle Shield","Tackle Suit Full","Scrum Machine Solo","Tackle Sausage Bag","Passing Machine","Rucking Pad","Agility Poles"],
      "Bags & Storage": ["Rugby Kitbag","Rugby Backpack","Ball Bag Rugby"],
      "Electronics": ["GPS Tracker Pod","Smart Rugby Ball","Video Analysis Camera"]
    },
    "American Football": {
      "Balls": ["Official Size Match Ball","Training Ball","Youth Football Ball","Flag Football Ball","Kicking Football"],
      "Helmets": ["Standard Full Helmet","Premium Full Helmet","Youth Helmet","Helmet Facemask Replacement","Helmet Visor/Eye Shield","Chin Strap"],
      "Pads & Protection": ["Shoulder Pads Full Adult","Shoulder Pads Youth","Rib Protector/Flak Jacket","Integrated Girdle Pads","Thigh Pads","Knee Pads","Hip Pads Set","Tailbone Pad","Neck Roll/Collar","Mouthguard"],
      "Gloves": ["Lineman Gloves","Receiver Gloves","QB Gloves","Arm Sleeve Hand Warmer"],
      "Footwear": ["Turf Shoes","Molded Cleat","Detachable Cleat","Lineman Cleat High Top","Skill Position Cleat Low Cut","Youth Cleats"],
      "Apparel": ["Game Jersey Home","Game Jersey Away","Training T-Shirt","Game Pants","Practice Pants","Football Socks","Compression Pants","Girdle Pants","Hoodie","Sideline Jacket","Beanie"],
      "Training Equipment": ["Blocking Sled 1-Man","Blocking Sled 2-Man","Blocking Sled 5-Man","Blocking Dummy","Tackling Ring","Snap Aid QB","QB Throwing Net","Route Runner Dummy","Agility Ladder","Cone Set","Speed Parachute"],
      "Game Equipment": ["Kicking Tee","Down Marker Set","Chain Crew Set","Play Wristband","Referee Flag Set"],
      "Bags & Storage": ["Equipment Duffel Bag","Helmet Bag","Shoulder Pad Bag"]
    },
    "Baseball": {
      "Bats": ["Wood Bat Maple","Wood Bat Ash","Wood Bat Birch","Aluminum Bat","Composite Bat","Hybrid Bat","Youth Bat","T-Ball Bat","Weighted Training Bat","Fungo Coach Bat","Softball Bat Slowpitch","Softball Bat Fastpitch"],
      "Balls": ["Official Leather Baseball","Training Baseball","Dimple Practice Ball","Pitching Machine Ball","Wiffle Ball","Soft Core Baseball","Rosin Bag"],
      "Gloves & Mitts": ["Fielding Glove 11\"","Fielding Glove 11.5\"","Fielding Glove 12\"","Infield Glove","Outfield Glove","First Base Mitt","Catcher's Mitt","Youth Baseball Glove","Batting Gloves"],
      "Protective Gear": ["Batting Helmet Single Ear","Batting Helmet Double Ear","Youth Batting Helmet","Catcher's Helmet/Mask","Catcher's Chest Protector","Catcher's Leg Guards","Catcher's Full Equipment Set","Sliding Shorts Hip Pads","Elbow Guard Batting","Shin Guard Batting","Athletic Cup"],
      "Footwear": ["Metal Cleats","Molded Cleats","Turf Shoes","Youth Cleats"],
      "Apparel": ["Jersey Button-Front","Jersey Pullover","Full Length Pants","Knicker Pants","Sliding Shorts","Belt","Stirrup Socks","Baseball Socks","Cap 6-Panel","Fitted Cap","Compression Undershirt","Compression Shorts","Women's Uniform"],
      "Training Equipment": ["Pitching Machine","Batting Tee","Heavy Bag Training Net","Batting Cage Net Full","Batting Cage Frame","Pop-Up Net","Pitching Target","Reaction Ball","Pitching Rubber","Portable Pitching Mound","Weighted Donut Sleeve","Swing Trainer","Resistance Bands"],
      "Accessories": ["Bat Bag Single","Bat Bag Double","Helmet Rack","Pine Tar Stick","Bat Grip Tape","Wristbands","Eye Black"],
      "Maintenance": ["Glove Oil/Conditioner","Glove Break-In Mallet","Glove Lacing Kit","Ball Bucket with Seat"],
      "Electronics": ["Radar Gun","Pitching Analyzer Sensor","Batting Swing Tracker"]
    },
    "Softball": {
      "Bats": ["Fastpitch Composite Bat","Fastpitch Aluminum Bat","Slowpitch Bat","Youth Softball Bat","Training Bat"],
      "Balls": ["Fastpitch Ball 11\"","Fastpitch Ball 12\"","Slowpitch Ball 12\"","Practice Softball","Foam Training Softball"],
      "Gloves": ["Fastpitch Glove 11\"","Fastpitch Glove 12\"","Fastpitch Glove 12.5\"","Slowpitch Glove","Catcher's Mitt Softball","First Base Mitt Softball","Youth Softball Glove"],
      "Protective Gear": ["Batting Helmet Softball","Catcher's Mask Softball","Catcher's Chest Protector","Catcher's Leg Guards","Face Guard","Sliding Shin Guard"],
      "Footwear": ["Molded Cleats Softball","Metal Cleats Fastpitch","Turf Shoes Softball"],
      "Apparel": ["Jersey Women's","Shorts Women's","Sliding Pants","Softball Socks","Cap Women's"],
      "Training Equipment": ["Pitching Machine Softball","Batting Tee Softball","Pitching Target","Batting Net","Pop-Up Catcher Trainer"],
      "Bags & Storage": ["Equipment Bag","Softball Backpack","Catcher's Gear Bag","Bat Bag"]
    },
    "Basketball": {
      "Balls": ["Official Size 7 Indoor","Official Size 7 Outdoor","Size 6 Women's","Size 5 Youth","Size 3 Mini","Heavy Training Ball","Foam Junior Ball","Rubber Outdoor Ball"],
      "Hoops & Systems": ["In-Ground Hoop System","Portable Adjustable Hoop","Wall-Mounted Hoop","Junior Portable Hoop","Indoor Court Hoop","Net Replacement","Backboard Replacement","Rim Protector","Weight Base Bags"],
      "Protective Gear": ["Knee Pads Sliding","Ankle Brace","Elbow Sleeve","Mouthguard","Basketball Goggles","Compression Shorts","Thumb Splint/Spica"],
      "Footwear": ["High Top Shoes Men's","Low Top Shoes Men's","Mid Top Shoes Men's","Shoes Women's","Shoes Youth","Training Shoes","Outdoor Basketball Shoes"],
      "Apparel": ["Jersey Home","Jersey Away","Game Shorts","Training Shorts","Compression Shorts","Compression Shirt","Crew Socks","Ankle Socks","Tracksuit","Warm-Up Jacket","Shooting Sleeve","Arm Sleeve","Headband","Wristband","Women's Jersey","Women's Shorts","Youth Kit"],
      "Training Equipment": ["Training Cones","Agility Ladder","Dribble Training Goggles","Ball Return Machine","Shooting Rebounder","Passing Machine","Weighted Ball","Resistance Bands","Vertical Jump Trainer","Speed Parachute","Free Throw Target"],
      "Accessories": ["Ball Pump","Pump Needle","Ball Bag 3-Ball","Ball Bag 6-Ball","Coach Whistle"],
      "Electronics": ["Shot Tracking Sensor","Performance Wearable","Shot Clock Electronic","Video Analysis Camera"]
    },
    "Volleyball": {
      "Balls": ["Indoor Official Ball","Beach Official Ball","Training Ball","Junior Size 4","Mini Ball","Foam Practice Ball"],
      "Nets & Standards": ["Official Indoor Net","Beach Volleyball Net","Portable Outdoor Net","Junior Net","Net Antennas Set","Fixed Post Set Indoor","Beach Post Set Portable","Winch Tensioner"],
      "Protective Gear": ["Knee Pads Gel","Knee Pads Standard","Ankle Brace","Finger Splint Tape","Elbow Sleeve","Wrist Support"],
      "Footwear": ["Indoor Shoes Men's","Indoor Shoes Women's","Beach Volleyball Shoes","Junior Indoor Shoes"],
      "Apparel": ["Jersey Men's","Jersey Women's","Shorts Men's","Shorts Women's","Spandex Shorts Women's","Compression Shorts","Volleyball Socks","Libero Jersey","Beach Top Women's","Beach Bottoms Women's","Training T-Shirt","Warm-Up Jacket"],
      "Training Equipment": ["Ball Trolley Cart","Serving Machine","Jump Training Platform","Blocking Resistance Band","Wall Target","Sand Training Kit"],
      "Accessories": ["Ball Pump","Ball Bag Team","Referee Stand Set","Line Judge Flags"],
      "Bags & Storage": ["Volleyball Kitbag","Team Ball Bag","Individual Backpack"]
    },
    "Handball": {
      "Balls": ["Size 3 Men's","Size 2 Women's/Junior","Size 1 Youth","Beach Handball","Indoor Training Ball","Resin Ball"],
      "Goals": ["Official Goal 3m×2m","Junior Goal","Portable Goal","Beach Goal","Replacement Net","Goal Post Pads"],
      "Protective Gear": ["GK Gloves","Knee Pads","Elbow Pads","Wrist Support","Finger Splints"],
      "Footwear": ["Indoor Shoes Men's","Indoor Shoes Women's","Junior Indoor Shoes"],
      "Apparel": ["Jersey Men's","Jersey Women's","Shorts","Socks","GK Pants","Compression Shorts","Training T-Shirt","Warm-Up Jacket"],
      "Training Equipment": ["Throwing Machine","Rebound Net","Training Cones","Agility Poles"],
      "Accessories": ["Resin Spray","Resin Remover","Ball Bag","Score Keeper Set"]
    },
    "Netball": {
      "Balls": ["Official Size 5","Training Ball","Mini Size 4"],
      "Posts & Rings": ["Portable Post Set","Fixed Ground Post","Wall-Mounted Ring","Adjustable Height Post","Post Padding","Ring Replacement"],
      "Protective Gear": ["Knee Pads","Ankle Brace","Finger Support"],
      "Footwear": ["Netball Shoes Women's","Netball Shoes Junior","Indoor Netball Shoes"],
      "Apparel": ["Dress/Skort","Position Bibs 8-Set","Training T-Shirt","Shorts","Socks","Hoodie"],
      "Training Equipment": ["Shooting Aid Ring","Training Bibs Set","Cones","Agility Dots"],
      "Accessories": ["Score Clock","Umpire Whistle Set","Ball Bag"]
    },
    "Field Hockey": {
      "Sticks": ["Composite Outdoor Stick","Wood Stick","GK Stick","Junior 28\"","Junior 30\"","Junior 32\"","Junior 34\"","Adult 36.5\"","Adult 37.5\"","Adult 38.5\"","50% Carbon Stick","90% Carbon Stick"],
      "Balls": ["Indoor Ball","Outdoor Dimple Ball","Outdoor Smooth Ball","Training Ball","Junior Soft Ball"],
      "GK Equipment": ["GK Helmet","GK Chest Protector","GK Abdominal Guard","GK Kickers","GK Leg Guards","GK Left Hand Protector","GK Right Hand Protector","GK Gloves","GK Neck Guard","Full GK Kit Set"],
      "Outfield Protective Gear": ["Shin Guards","Mouthguard","Hand Protector","Ankle Guard","Elbow Protector"],
      "Footwear": ["Astroturf Shoes","Indoor Shoes","GK Boots","Junior Hockey Shoes"],
      "Apparel": ["Match Jersey","Training Jersey","Match Shorts","Socks","Skirt/Skort Women's","Training T-Shirt","Warm-Up Suit","GK Pants"],
      "Training Equipment": ["Rebounder/Kickboard","Passing Board","Cones Set","Speed Ladders","Training Bibs"],
      "Accessories": ["Stick Tape","Toe Guard/Cap","Umpire Whistle","Corner Flags","Goal Post Sleeves"],
      "Bags & Storage": ["Stick Bag Single","Stick Bag Double","Hockey Kitbag","GK Bag"],
      "Maintenance": ["Stick Grip Tape","Grip Replacement","Shin Guard Cleaner"]
    },
    "Ice Hockey": {
      "Sticks": ["Senior Composite Stick","Senior Wood Stick","Junior Stick","Youth Stick","Goalie Stick Senior","Goalie Stick Junior","Replacement Blade"],
      "Pucks & Balls": ["Official Black Rubber Puck","Heavy Training Puck","Light Training Puck","Green Biscuit Off-Ice Puck","Foam Safety Puck Junior","Street Hockey Ball Orange","Street Hockey Ball Pink"],
      "Player Protection": ["Helmet + Cage Senior","Helmet + Visor Senior","Junior Helmet","Shoulder Pads Senior","Shoulder Pads Junior","Elbow Pads Senior","Elbow Pads Junior","Hockey Gloves Senior","Hockey Gloves Junior","Hockey Pants Senior","Hockey Pants Junior","Shin Guards Senior","Shin Guards Junior","Protective Cup/Jock","Neck Guard","Throat Protector"],
      "Goalie Equipment": ["Goalie Mask","Goalie Chest & Arms","Goalie Pants","Goalie Leg Pads","Blocker Glove","Catcher/Trapper","Goalie Skates","Goalie Jock"],
      "Skates": ["Senior Ice Hockey Skates","Junior Skates","Youth Skates","Recreational Skates"],
      "Apparel": ["Game Jersey Home","Game Jersey Away","Hockey Socks/Stockings","Compression Jock Shorts","Practice Jersey","Track Jacket","Sock Holder Belt","Goalie Jersey"],
      "Training Equipment": ["Off-Ice Shooting Pad","Synthetic Ice Tiles","Passing Target Net","Puck Handling Trainer","Stickhandling Set","Slide Board","Balance Board Goalie"],
      "Accessories": ["Blade Soakers Pair","Walking Guards Pair","Skate Laces","Hockey Tape White","Hockey Tape Black","Wax Tape","Stick Wax","Blade Protector"],
      "Bags & Storage": ["Equipment Bag Senior","Equipment Bag Junior","Stick Carry Bag","Goalie Equipment Bag","Skate Bag"],
      "Maintenance": ["Skate Sharpening Stone","Holder Replacement","Shaft Plug","Stick End Plug"]
    },
    "Lacrosse": {
      "Sticks": ["Men's Complete Stick","Men's Head Only","Men's Shaft Only","Women's Complete Stick","Women's Head Only","Youth Complete Stick","Box Lacrosse Stick","Goalie Stick","Goalie Head"],
      "Balls": ["Official Yellow Ball","Official White Ball","Practice Ball","Soft Youth Ball"],
      "Protective Gear": ["Men's Helmet","Youth Helmet","Shoulder Pads","Elbow Pads","Men's Gloves","Youth Gloves","Rib Guard","Women's Goggles","Mouthguard","Goalie Chest Protector","Goalie Gloves","Goalie Shin Guards","Goalie Throat Protector"],
      "Footwear": ["Men's Cleats","Women's Cleats","Youth Cleats","Turf Shoes"],
      "Apparel": ["Men's Jersey","Women's Jersey","Shorts","Compression Shorts","Socks","Warm-Up Jacket"],
      "Training Equipment": ["Rebounder Net","Passing Wall","Training Cones","Speed Ladder"],
      "Bags & Storage": ["Equipment Bag","Backpack","Stick Bag","Ball Bag"]
    },
    "Ultimate Frisbee": {
      "Discs": ["Official Disc 175g","Training Disc","Junior Disc","Lightweight Disc","Beach Ultimate Disc","Starter Set"],
      "Footwear": ["Cleats Firm Ground","Cleats Artificial Ground","Junior Cleats","Indoor Shoes"],
      "Apparel": ["Jersey","Shorts","Compression Shorts","Socks"],
      "Accessories": ["Disc Bag","Cone Set","Agility Ladder"]
    },
    "Beach Volleyball": {
      "Balls": ["Official Beach Ball","Training Ball","Mini Beach Ball"],
      "Nets": ["Competition Net","Recreational Net","Portable Post Set","Net Antenna Set Beach"],
      "Protective Gear": ["Knee Pads","Ankle Brace","UV Arm Sleeve"],
      "Footwear": ["Sand Shoes","Sand Socks"],
      "Apparel": ["Women's Bikini Top","Women's Bikini Bottoms","Women's Board Shorts","Men's Tank Top","Men's Shorts","Compression Top","UV Sun Shirt"],
      "Accessories": ["Ball Pump","Ball Bag","Sports Sunscreen SPF50","UV Sport Sunglasses"]
    },
    "Water Polo": {
      "Balls": ["Men's Size 5","Women's Size 4","Junior Size 3","Soft Training Ball"],
      "Goals": ["Official Floating Goal","Portable Goal","Pool Anchor Set","Replacement Net Water Polo"],
      "Protective Gear": ["Home Cap Set 7","Away Cap Set 7","GK Cap","Mouthguard"],
      "Apparel": ["Men's Competition Swimsuit","Women's Competition Swimsuit","Training Cap","Training Shorts"],
      "Training Equipment": ["Rebounder Wall","Training Floats","Lane Lines","Throwing Trainer"],
      "Accessories": ["Training Goggles","Drag Shorts","Kickboard","Pull Buoy","Pool Bag"]
    },
    "Kabaddi": {
      "Equipment": ["Soft Rubber Ball","Indoor Court Mat","Boundary Marking Tape","Referee Whistle Set"],
      "Protective Gear": ["Knee Support","Ankle Support","Elbow Guard","Mouthguard"],
      "Footwear": ["Court Shoes","Wrestling-Style Shoes","Barefoot Training Shoes"],
      "Apparel": ["Jersey Set","Shorts","Socks","Training T-Shirt","Pro Kurchungi Shorts"],
      "Training Equipment": ["Agility Ladder","Ankle Resistance Bands","Cones"]
    },
    "Kho Kho": {
      "Equipment": ["Central Poles Set","Court Marking Kit","Referee Whistle"],
      "Protective Gear": ["Knee Pads","Ankle Guards"],
      "Footwear": ["Court Shoes","Agility Shoes"],
      "Apparel": ["Jersey Set","Shorts","Socks"],
      "Training Equipment": ["Agility Cones","Speed Ladder"]
    },
    "Dodgeball": {
      "Balls": ["Rubber Dodgeball 6-Set","Foam Dodgeball Set","PU Foam Dodgeball","Mini Dodgeball"],
      "Protective Gear": ["Protective Goggles","Mouthguard"],
      "Apparel": ["Jersey","Shorts","Socks","Training Kit"],
      "Equipment": ["Court Markers Set","Boundary Line Set"]
    },
    "Sepak Takraw": {
      "Balls": ["Rattan Ball","Synthetic Ball","Training Ball"],
      "Nets": ["Official Net","Post Set","Portable Net"],
      "Footwear": ["Takraw Shoes","Flexible Court Shoes"],
      "Apparel": ["Jersey Set","Shorts","Headband"],
      "Training Equipment": ["Hoop Stand","Training Cones Set"]
    },
    "Tchoukball": {
      "Balls": ["Tchoukball Official","Training Ball"],
      "Frames": ["Official Frame 100cm","Portable Frame Set"],
      "Apparel": ["Jersey","Shorts","Socks"],
      "Training Equipment": ["Cones","Rebound Board"]
    },
    "Futsal": {
      "Balls": ["Futsal Ball Official Low Bounce","Training Ball","Junior Ball"],
      "Goals": ["Official Futsal Goal","Portable Goal","Junior Futsal Goal"],
      "Footwear": ["Indoor Shoes Adult","Junior Indoor Shoes"],
      "Apparel": ["Futsal Jersey","Futsal Shorts","Futsal Socks","GK Kit"],
      "Training Equipment": ["Cones","Agility Poles","Rebounder"],
      "Accessories": ["Shin Guards Indoor","GK Gloves Indoor","Ball Pump"]
    }
  },

  "🎾 Racquet Sports": {
    "Badminton": {
      "Racquets": ["Beginner Aluminum","Intermediate Graphite","Advanced Full Carbon","Professional Competition","Junior Short-Grip","Head-Heavy Power","Head-Light Speed","Even Balance Control","Doubles Pair Set"],
      "Shuttlecocks": ["Feather Slow 75","Feather Medium 76","Feather Fast 77","Feather Tube 12","Nylon Slow Green Cap","Nylon Medium Blue Cap","Nylon Fast Red Cap","Foam Junior Shuttle"],
      "Nets & Posts": ["Official Net 6.1m","Portable Outdoor Net Set","Fixed Post Set","Portable Post Set","Umpire Chair Badminton"],
      "Protective Gear": ["Ankle Support","Wrist Support","Knee Support","Elbow Support","Eye Protective Goggles"],
      "Footwear": ["Non-Marking Shoes Men's","Shoes Women's","Shoes Junior","Wide Fit Shoes","Training Indoor Shoes"],
      "Apparel": ["Jersey Men's","Jersey Women's","Shorts Men's","Shorts Women's","Polo Shirt","Training T-Shirt","Socks","Skirt/Skort Women's","Warm-Up Jacket","Tracksuit","Compression Top"],
      "Accessories": ["Overgrip Towel Texture","Overgrip Tacky","Replacement Under-Grip","String Thin Gauge","String Medium Gauge","Vibration Dampener","Wristband","Headband","Racquet Cover","Grip Powder Bag"],
      "Training Equipment": ["Multi-Shuttle Feeder Machine","Rebound Net","Footwork Cone Set","Agility Ladder","Shadow Footwork Mat","Target Rings Court"],
      "Bags & Storage": ["Bag 2-Racquet","Bag 6-Racquet","Bag 12-Racquet","Kitbag","Backpack","Shuttle Tube Bag"],
      "Maintenance": ["String Tension Meter","Stringing Machine Drop Weight","Stringing Machine Crank","Stringing Machine Electronic","Stringing Awl & Plier Set","Frame Protector Tape"],
      "Electronics": ["Smart Sensor Racquet","Shuttle Speed Radar"]
    },
    "Tennis": {
      "Racquets": ["Beginner","Intermediate","Advanced","Professional Competition","Junior 19\"","Junior 21\"","Junior 23\"","Junior 25\"","Junior 26\"","Oversized Power Frame","Mid-Plus Control","Custom Strung"],
      "Balls": ["Regular Duty 3-Pack","Extra Duty 3-Pack","High Altitude","Orange Stage 2","Red Foam Stage 3","Green Stage 1","Hopper Training Mix","Pressureless","Machine Feed Bulk 96"],
      "Nets": ["Official Net 12.8m","Portable Net","Fixed Posts","Centre Strap","Court Line Tape"],
      "Protective Gear": ["Elbow Brace Counterforce","Wrist Brace","Knee Support","Ankle Support","UV Sunglasses"],
      "Footwear": ["Clay Court Men's","Hard Court Men's","Grass Court Men's","All Court Men's","Clay Court Women's","Hard Court Women's","All Court Women's","Junior Shoes","Indoor Training Shoes"],
      "Apparel": ["Polo Men's","T-Shirt Men's","Shorts Men's","Compression Shorts","Socks Men's","Dress Women's","Skirt Women's","Top Women's","Shorts Women's","Socks Women's","Cap/Visor","Hoodie","Wind Jacket","Junior Dress","Junior T-Shirt Boys","Junior Shorts Boys"],
      "Accessories": ["Overgrip Tacky 3-Pack","Overgrip Dry 3-Pack","Replacement Cushion Grip","String Polyester 1.25","String Multifilament 1.30","String Natural Gut","Vibration Dampener","Wristband","Headband","Ball Hopper 72-Ball","Ball Hopper Cart 150","Ball Pickup Tube","Court Broom"],
      "Training Equipment": ["Ball Machine Battery","Ball Machine Mains","Return Board Rebounder","Cone Set","Mini Net Set","Speed Hurdles","Medicine Ball","Resistance Bands"],
      "Bags & Storage": ["Bag 2-Racquet","Bag 6-Racquet","Bag 9-Racquet","Bag 12-Racquet","Backpack","Tote Bag","Junior Bag"],
      "Maintenance": ["Stringing Machine","Tension Measuring Tool","Grip Finishing Tape","Frame Protector Tape","Lead Tape Customization"],
      "Electronics": ["Smart Sensor Handle","Speed Radar Gun","AI Training Rebounder"]
    },
    "Table Tennis": {
      "Bats & Blades": ["Beginner Complete Bat","Intermediate Bat","Advanced Bat","Penhold Blade","Shakehand Speed Blade","Control Blade","Junior Bat","Robot Training Bat"],
      "Rubbers": ["Inverted High Spin Sheet","Inverted Speed Sheet","Short Pimples Out Sheet","Long Pimples Out Sheet","Anti-Spin Sheet","Sheet 1.5mm Thickness","Sheet 1.8mm","Sheet 2.0mm","Sheet 2.2mm"],
      "Balls": ["3-Star Pack 6","3-Star Pack 12","Training Orange Pack 60","Robot Feed Pack 100","Multi-Ball Bulk 200"],
      "Tables": ["ITTF Competition Table","Indoor Foldable Table","Outdoor Table","Mini Table","Compact Foldable","Club Full Size","Conversion Top","Robot Attachment Table"],
      "Nets": ["Competition Net & Posts","Clip-On Net Set","Retractable Net","Junior Net"],
      "Footwear": ["Shoes Men's","Shoes Women's","Shoes Junior","Wide Fit"],
      "Apparel": ["Shirt Men's","Shirt Women's","Shorts","Skirt Women's","Socks","Tracksuit"],
      "Accessories": ["Rubber Cleaning Sponge","Rubber Cleaner Spray","Side/Edge Tape","Bat Case","Wristband","Headband"],
      "Training Equipment": ["Robot Machine","Multi-Ball Basket 200","Footwork Cones","Reaction Balls"],
      "Bags & Storage": ["Bat Case","Equipment Bag","Ball Caddy 200"]
    },
    "Squash": {
      "Racquets": ["Beginner Graphite","Intermediate","Advanced","Junior","Teardrop Head","Classic Head"],
      "Balls": ["Double Yellow Dot","Yellow Dot","Red Dot Beginner","Blue Dot Junior","Multi-Pack 3"],
      "Protective Gear": ["Eye Guard Adults","Eye Guard Junior","Wrist Support","Ankle Brace"],
      "Footwear": ["Non-Marking Shoes Men's","Shoes Women's","Junior Shoes","Wide Fit"],
      "Apparel": ["Polo Men's","T-Shirt","Shorts","Skirt Women's","Socks","Warm-Up Jacket"],
      "Accessories": ["Overgrip Pack 3","String Monofilament","String Multifilament","Vibration Dampener","Wristband","Headband","Racquet Cover"],
      "Bags & Storage": ["Bag 2-Racquet","Bag 6-Racquet","Backpack"],
      "Training Equipment": ["Solo Practice Ball","Wall Return Board","Footwork Ladder"]
    },
    "Racquetball": {
      "Racquets": ["Beginner Racquet","Intermediate Racquet","Advanced Racquet","Junior Racquet"],
      "Balls": ["Blue Slow","Purple Control","Red Outdoor","Black Extra Slow","Pack 3"],
      "Protective Gear": ["Eye Guards Adults","Eye Guards Junior","Wrist Support"],
      "Footwear": ["Non-Marking Men's","Non-Marking Women's"],
      "Apparel": ["Shirt","Shorts","Socks"],
      "Accessories": ["Overgrip Pack","Wrist Thong Strap","Racquet Cover"],
      "Bags & Storage": ["Bag 2-Racquet","Backpack"]
    },
    "Pickleball": {
      "Paddles": ["Beginner Wood Paddle","Graphite Composite","Carbon Fiber Paddle","Composite Mid-Range","Junior Paddle","Textured Surface","Elongated Shape","Heavyweight Paddle"],
      "Balls": ["Indoor Pack 6","Outdoor Pack 6","Practice Pack 12","Junior Ball"],
      "Nets": ["Official Portable Net","Post Set","Net Carry Bag","Backyard Kit"],
      "Protective Gear": ["Knee Support","Wrist Guard","Elbow Brace"],
      "Footwear": ["Court Shoes Men's","Court Shoes Women's","Outdoor Court Shoes"],
      "Apparel": ["Polo Men's","Polo Women's","Shorts","Skirt Women's","Socks"],
      "Accessories": ["Overgrip Pack","Edge Guard Tape","Paddle Cover Case","Bag 2-Paddle","Bag 4-Paddle","Score Keeper"],
      "Training Equipment": ["Ball Machine","Return Board","Target Cones"]
    },
    "Padel": {
      "Racquets": ["Beginner EVA Foam","Intermediate Padel","Advanced Fiberglass","Professional Carbon","Diamond Shape","Round Shape","Junior Padel","Teardrop Shape"],
      "Balls": ["Padel Ball 3-Pack","Padel Ball 12-Pack","Indoor Padel Ball","High Altitude Ball"],
      "Protective Gear": ["Safety Wrist Strap","Elbow Brace","Knee Pad"],
      "Footwear": ["Clay Shoes Men's","Clay Shoes Women's","Hard Court Shoes","Junior Padel Shoes"],
      "Apparel": ["T-Shirt Men's","Polo Men's","Shorts Men's","Dress Women's","Skirt Women's","Top Women's","Socks","Windbreaker"],
      "Accessories": ["Overgrip 3-Pack","Rubber Edge Protector","Bag 2-Racquet","Bag 4-Racquet","Backpack","Wristband"]
    },
    "Platform Tennis": {
      "Paddles": ["Beginner Paddle","Advanced Paddle","Junior Paddle"],
      "Balls": ["Platform Ball Orange 3-Pack","Training Ball"],
      "Apparel": ["Thermal Jacket","Thermal Gloves","Knit Hat"],
      "Accessories": ["Paddle Cover","Ball Bag"]
    },
    "Beach Tennis": {
      "Racquets": ["Beach Tennis Racquet Carbon","Beach Tennis Racquet Junior"],
      "Balls": ["Beach Tennis Ball 3-Pack","Practice Ball"],
      "Nets": ["Beach Tennis Net Portable","Beach Post Set"],
      "Apparel": ["Beach Tennis Top Men's","Beach Tennis Shorts","Women's Dress Beach Tennis"],
      "Accessories": ["Racquet Bag Beach Tennis","Overgrip Beach"]
    }
  },

  "🥊 Combat Sports": {
    "Boxing": {
      "Gloves": ["Training 10oz","Training 12oz","Training 14oz","Training 16oz","Competition 8oz","Competition 10oz","Sparring 16oz","Sparring 18oz","Open Palm Bag Gloves","Bag Mitts","Junior Boxing Gloves","Women's Boxing Gloves"],
      "Hand & Wrist Wraps": ["Mexican Style 180\"","Junior Wraps 120\"","Elastic Wraps 4.5m","Gel Knuckle Wraps","Quick Wraps Inner Gloves","Athletic Tape & Bandage"],
      "Punch Bags & Mitts": ["Heavy Bag Leather 70lb","Heavy Bag Leather 100lb","Heavy Bag PU 40kg","Free-Standing Bag Base","Speed Ball/Speed Bag","Wall Reflex Bag","Double End Bag","Uppercut/Banana Bag","Water Base Heavy Bag","Focus Mitts Leather","Focus Mitts PU","Curved Focus Mitts","Thai Pads Pair","Body Shield Full"],
      "Protective Gear": ["Headguard Open Face","Headguard Cheek Guard","Headguard Face Bar","Junior Headguard","Double Mouthguard","Custom-Fit Mouthguard","Groin Guard Men's","Groin Guard Women's","Breast Protector Women's","Rib Guard/Body Protector","Elbow Protector","Knee Protector"],
      "Footwear": ["High Top Boxing Boots Leather","Low Cut Boxing Boots","Junior Boxing Boots","Boxing Training Shoes"],
      "Apparel": ["Shorts Men's","Shorts Women's","Boxing Robe","Compression Shorts","Vest/Tank Top","Hoodie","Training T-Shirt","Tracksuit","Junior Kit","Socks"],
      "Ring Equipment": ["Boxing Ring 14ft","Boxing Ring 16ft","Ring Canvas Replacement","Corner Pads Set","Ring Ropes Set","Turnbuckles Set","Corner Stools Set","Referee Uniform"],
      "Training Equipment": ["Digital Boxing Timer","Speed Ball Ceiling Platform","Skipping Rope Leather","Skipping Rope Beaded","Skipping Rope Steel Cable","Slip Rope Training","Leather Medicine Ball","Agility Ladder","Resistance Bands Set","Uppercut Pad Wall Mount"],
      "Accessories": ["Petroleum Jelly","Cut Kit Corner","Water Bottle","Mouthguard Case","Glove Bag","Equipment Bag"],
      "Maintenance": ["Glove Deodorizer Spray","Glove Odor Balls","Leather Conditioner","Glove Drying Balls"]
    },
    "MMA": {
      "Gloves": ["Training 7oz","Training 10oz","Open Finger Fight Gloves","Grappling Gloves","Sparring 16oz","Junior MMA Gloves"],
      "Apparel": ["Fight Shorts Men's","Board Shorts","Compression Shorts","Rashguard Short Sleeve","Rashguard Long Sleeve","BJJ Gi Training","Hoodie MMA","T-Shirt MMA","Women's Shorts","Sports Bra Women's","Vale Tudo Shorts"],
      "Protective Gear": ["Leather Headguard","Cheek Headguard","Mouthguard","Groin Guard Men's","Pelvic Protector Women's","Shin Guards MMA","Instep Guards","Elbow Guards","Rib Guard","Chest Protector Women's","Knee Pads MMA"],
      "Training Equipment": ["MMA Heavy Bag","Cage Grappling Dummy","Standing Grappling Dummy","Focus Mitts MMA","Thai Pads","Body Shield","Wall Grappling Pad","Crash Landing Mat","EVA Puzzle Mat","Speed Bag","Takedown Wrestling Dummy"],
      "Footwear": ["MMA Training Shoes","Barefoot Ankle Wraps"],
      "Bags & Storage": ["MMA Kitbag","MMA Backpack","MMA Roller Gear Bag"]
    },
    "Wrestling": {
      "Equipment": ["Wrestling Mat 4×4m","Mat Roll 12m×6m","Training Takedown Dummy","Mat Cleaner Spray"],
      "Protective Gear": ["Headgear/Ear Guards","Knee Pads","Ankle Support","Mouthguard","Athletic Cup","Elbow Pad"],
      "Footwear": ["High Top Shoes Men's","Low Cut Shoes","Women's Shoes","Junior Shoes"],
      "Apparel": ["Singlet Men's","Singlet Women's","Singlet Junior","Shorts","Compression Shorts","Rashguard","T-Shirt"],
      "Training Equipment": ["Resistance Bands","Weighted Grappling Dummy","Sprawl Pad","Takedown Pad","Agility Ladder"],
      "Bags & Storage": ["Wrestling Gear Bag","Shoe Bag Wrestling"]
    },
    "Judo": {
      "Judogi": ["Gi White Single Weave A0","Gi White A1","Gi White A2","Gi White A3","Gi White A4","Gi White Double Weave","Gi Blue Competition","Junior Gi Set","Women's Gi","IJF Competition Gi","Lightweight Training Gi"],
      "Belts": ["White Belt","Yellow Belt","Orange Belt","Green Belt","Blue Belt","Brown Belt","Black Belt","Red/White Higher Dan Belt"],
      "Equipment": ["Tatami Foam Mat 1×1m","Puzzle Mat Set","Mat Roll Premium","Crash Pad Judo","Training Partner Dummy","Grip Trainer"],
      "Protective Gear": ["Ear Guards","Knee Pads","Mouthguard","Groin Guard","Finger Tape Athletic"],
      "Accessories": ["Fighting Belt Red/Blue","Electronic Scoreboard Judo","Judo Bag"],
      "Training Equipment": ["Uchi-Komi Resistance Band","Grip Strength Trainer","Crash Mat Ukemi","Referee Clock Timer"]
    },
    "Karate": {
      "Gi": ["Gi White Kata Style","Gi White Kumite Lightweight","Junior Gi","WKF Approved Gi","Belt Set Full Colors"],
      "Equipment": ["Arm Guards WKF","Shin/Foot Pads","Body Protector WKF","Groin Guard","Women's Chest Guard WKF","Headguard WKF","Mouthguard","Hand Protectors WKF"],
      "Training Equipment": ["Makiwara Striking Board","Heavy Bag Karate","Focus Mitts Karate","Kicking Shield","Pine Breaking Boards","Reusable Plastic Boards","Karate Training Dummy"],
      "Footwear": ["Karate Training Shoes","Kata Boots Soft Sole"],
      "Bags & Storage": ["Kitbag","Gi Bag"]
    },
    "Taekwondo": {
      "Dobok": ["Dobok White Standard","Dobok WT Competition","Junior Dobok","V-Neck Dobok","Belt Full Color Set"],
      "Equipment": ["Electronic Hogu Chest Guard","Standard Hogu","WT Standard Headgear","Electronic Headgear","Forearm Guards","Shin Guards TKD","Groin Guard","TKD Gloves","Electronic Foot Protectors","Standard Foot Protectors","Mouthguard TKD","Women's Breast Guard TKD"],
      "Training Equipment": ["Curved Kicking Shield","Thai Pads TKD","Breaking Station Holder","Kicking Dummy","Reaction Paddles"],
      "Footwear": ["Competition Shoes TKD","Training Shoes TKD"],
      "Bags & Storage": ["Gear Bag TKD","Dobok Bag"]
    },
    "Muay Thai": {
      "Gloves": ["8oz Muay Thai","10oz Muay Thai","12oz Muay Thai","14oz Muay Thai","16oz Competition","Bag Gloves MT","Junior Muay Thai Gloves"],
      "Training Equipment": ["Heavy Bag 100lb MT","Heavy Bag 150lb MT","Banana Bag Long","Thai Pads Pair","Shin & Instep Pads","Arm/Belly Pad","Body Shield MT","Focus Mitts MT","Curved Kicking Shield","Uppercut Bag MT","Speed Ball MT"],
      "Protective Gear": ["Mouthguard MT","Groin Guard Men's MT","Open Face Headguard","Elbow Guard MT","Shin Guards Competition MT","Ankle Support MT","Women's Breast Guard MT"],
      "Apparel": ["Satin Shorts","Nylon Shorts","Short Sleeve Rashguard","Long Sleeve Rashguard","Vale Tudo Shorts MT","Training T-Shirt MT","Mongkon Ceremonial"],
      "Footwear": ["Training Shoes MT","Ankle Wrap/Bandage"],
      "Accessories": ["Hand Wraps 4.5m","Jump Rope MT","Knee Brace","Belt Support"],
      "Bags & Storage": ["Gym Bag MT","Glove Bag MT","Equipment Bag MT"]
    },
    "Brazilian Jiu-Jitsu": {
      "Gi": ["Gi White A0-A1","Gi White A2-A3","Gi White A4-A6","Gi Blue Adult","Gi Black Adult","Women's Gi White","Women's Gi Blue","Junior Gi M0-M2","Junior Gi M3-M4","IBJJF Competition Gi"],
      "Belts": ["White Belt BJJ","Blue Belt BJJ","Purple Belt BJJ","Brown Belt BJJ","Black Belt BJJ","Junior Belt Set BJJ"],
      "No-Gi Apparel": ["Grappling Shorts","Short Sleeve Rashguard","Long Sleeve Rashguard","Compression Shorts No-Gi","Spats/Leggings","Women's Sports Bra BJJ","Fight Shorts No-Gi"],
      "Equipment": ["EVA Foam Puzzle Mat","Submission Training Dummy","No-Gi Grappling Dummy"],
      "Protective Gear": ["Ear Guard BJJ","Knee Pads BJJ","Mouthguard BJJ","Groin Guard BJJ","Athletic Tape Fingers"],
      "Footwear": ["No-Gi Grip Shoes","Bare Foot Grip Socks"],
      "Bags & Storage": ["Gi Belt Bag","BJJ Kitbag","BJJ Backpack"]
    },
    "Fencing": {
      "Weapons": ["Foil Electric Competition","Foil Practice Training","Épée Electric Competition","Épée Training","Sabre Electric Competition","Sabre Training","Junior Foil","Junior Épée","Junior Sabre"],
      "Protective Equipment": ["Mask Foil/Épée","Mask Sabre","Electric Mask Foil","Jacket Right-Handed","Jacket Left-Handed","Breeches/Knickers","Women's Chest Guard","Men's Chest Protector","Glove Right","Gauntlet Left Sabre","Under-Jacket","Foil Lame","Sabre Lame"],
      "Electronics": ["3-Weapon Scoring Machine","Body Wire Foil/Épée","Body Wire Sabre","Reel Foil","Reel Épée","Reel Sabre","Floor Wire Set"],
      "Footwear": ["Competition Shoes Fencing","Training Shoes Fencing","Junior Fencing Shoes"],
      "Apparel": ["Knee-High Socks Fencing","Compression Tights","Compression Top"],
      "Bags & Storage": ["Weapon Bag 2-Weapon","Full Equipment Bag","Fencing Backpack","Weapon Rack"],
      "Maintenance": ["Blade Polish/Cleaner","Tip Replacement Set","Body Wire Repair Kit","Grip Replacement Fencing"]
    },
    "Kendo": {
      "Equipment": ["Shinai 39 Senior","Shinai 37 Junior","Bokken Practice","Men Head Guard","Do Body Protector","Kote Gloves","Tare Hip Protector","Full Bogu Set"],
      "Apparel": ["Keikogi White","Keikogi Blue/Indigo","Hakama Navy","Hakama Black","Tenugui Head Cloth","Kendo Belt"],
      "Bags & Storage": ["Shinai Bag","Bogu Bag"],
      "Maintenance": ["Shinai Repair Kit","Bogu Lacing Kit","Tsuba Stopper","Cleaning Cloth Kendo"]
    },
    "Capoeira": {
      "Instruments": ["Berimbau","Pandeiro Hand Drum","Atabaque Drum","Reco-Reco","Agogo Bells"],
      "Apparel": ["Abada Pants White","Abada Pants Colored","Capoeira T-Shirt","Capoeira Cord Belt"],
      "Footwear": ["Canvas Shoes Capoeira","Leather Boots Capoeira"]
    },
    "Sambo": {
      "Apparel": ["Sambovka Jacket","Sambo Shorts & Belt","Belt Set Sambo"],
      "Equipment": ["Sambo Mat Set","Sambo Grappling Dummy"],
      "Protective Gear": ["Ear Guards Sambo","Ankle Support Sambo"]
    }
  },

  "🏃 Athletics & Running": {
    "Road Running": {
      "Footwear": ["Neutral Shoes Men's","Stability Shoes Men's","Motion Control Men's","Neutral Shoes Women's","Stability Shoes Women's","Junior Running Shoes","Carbon Plate Racing Flat","Lightweight Racing Flat","Max Cushion Shoes","Minimalist Shoes","Zero Drop Shoes","Wide Fit Running Shoes"],
      "Apparel": ["Technical T-Shirt Men's","Technical T-Shirt Women's","Vest/Singlet Men's","Vest Women's","2-in-1 Shorts Men's","Lined Shorts Men's","Shorts Women's","Full Tights Men's","Full Tights Women's","Capri Women's","Hoodie Men's","Hoodie Women's","Lightweight Jacket","Waterproof Jacket","Wind Vest/Gilet","Compression Socks","No-Show Socks","Cushioned Socks","Mesh Running Cap","Beanie","Lightweight Running Gloves","Buff/Neck Gaiter","Reflective Safety Vest","Running Headband"],
      "Accessories": ["Phone Armband","Running Waist Belt","Handheld Water Bottle","Hydration Running Vest","Blister Prevention Tape","Anti-Chafe Balm","Running Sunglasses","Wireless Running Earphones","Reflective Ankle Bands","No-Tie Lace Locks","Arch Support Insoles","LED Safety Light"],
      "Training Equipment": ["Resistance Bands Set","Running Parachute","Speed Chute","Push Sled Running","Foam Roller Standard","Percussion Massage Gun","Agility Ladder"],
      "Electronics": ["GPS Watch Advanced","GPS Watch Entry-Level","Heart Rate Chest Strap","Optical HR Wristband","Running Footpod"]
    },
    "Trail Running": {
      "Footwear": ["Aggressive Lug Men's","Light Trail Men's","Trail Shoes Women's","Junior Trail Shoes","Gore-Tex Waterproof Trail","Ultra Trail Shoes"],
      "Apparel": ["Trail Shorts Men's","Trail Shorts Women's","Trail T-Shirt","Long Sleeve Trail Top","Softshell Jacket Trail","Hardshell Jacket Trail","Trail Tights","Trail Gaiters","Trail Cap","Trail Running Gloves"],
      "Accessories": ["Foldable Trekking Poles","Hydration Vest 4L","Hydration Vest 8L","Hydration Vest 12L","Water Bladder 1.5L","Water Bladder 2L","Trail Headlamp","Emergency Bivvy Bag","Trail First Aid Kit","Orienteering Compass Trail"],
      "Electronics": ["GPS Trail Watch Topo Maps","Satellite Communicator 2-Way"]
    },
    "Track & Field": {
      "Throwing Equipment": ["Shot Put 7.26kg Men's","Shot Put 4kg Women's","Shot Put 3kg Junior","Discus 2kg Men's","Discus 1kg Women's","Discus 1.5kg Junior","Javelin 800g Men's","Javelin 600g Women's","Javelin Junior","Hammer 7.26kg Men's","Hammer 4kg Women's","Training Rubber Hammer","Javelin Practice Junior"],
      "Jumping Equipment": ["High Jump Bar Fiberglass","High Jump Landing Mat","Adjustable High Jump Posts","Long Jump Measurement Rake","Pole Vault Pole Carbon","Pole Vault Pole Fiberglass","Pole Vault Box","Pole Vault Landing Pit","Triple Jump Measure Tape"],
      "Track Equipment": ["Fixed Hurdles Aluminum","Adjustable 3-Height Hurdles","Professional Starting Blocks","Adjustable Starting Blocks","Relay Baton Set 4","Junior Relay Baton","Lane Marker Discs","Electronic Timing Gate Set","Finish Line Camera System"],
      "Footwear": ["Sprint Spikes Short Track","Sprint Spikes Long Track","Middle Distance Spikes","Long Distance Spikes","Long Jump Shoes","Throwing Shoes Rotational","Pole Vault Shoes","Hurdles Spikes","Track Training Flats","Cross Country Spikes Men's","Cross Country Spikes Women's"],
      "Apparel": ["Vest/Singlet Men's","Vest Women's","Track Shorts Men's","Track Shorts Women's","Bodysuit All-in-One","Compression Shorts Track","Track Tights","Throwing Shirt","Full Warm-Up Suit","Track Jacket","Low-Cut Track Socks"],
      "Accessories": ["Spike Wrench","9mm Spike Set Replacement","6mm Spike Set","Throw Measurement Tape 100m","Competition Number Bibs","Bib Holder Pins","Throwing Grip Tape","Athlete Rain Cover"]
    },
    "Marathon & Ultra Running": {
      "Footwear": ["Carbon Plate Racing Shoe","Long Distance Cushion Shoe","Ultra Marathon Shoe","Night Running Reflective Shoe"],
      "Apparel": ["Marathon Singlet","Brief-Liner Marathon Shorts","Compression Tights","Lightweight Marathon Jacket","Anti-Blister Socks","Wicking Marathon Cap"],
      "Nutrition & Hydration": ["Energy Gels Box 24","Energy Chews Pack","Electrolyte Tablets Tube","Sports Drink Powder","Soft Flask 250ml","Soft Flask 500ml","Hydration Pack 1.5L","Hydration Pack 2L"],
      "Accessories": ["Race Number Belt","GPS Marathon Watch","Anti-Chafe Sticks","Marathon Blister Kit"]
    },
    "Cross Country Running": {
      "Footwear": ["XC Spikes Men's","XC Spikes Women's","Junior XC Spikes","XC Flat Trainer"],
      "Apparel": ["XC Vest/Singlet","XC Shorts","XC Long Sleeve","XC Tights","XC Socks"],
      "Accessories": ["XC Spike Bag","Race Bibs XC","Course Marker Flags"]
    }
  },

  "💪 Fitness & Gym": {
    "Strength Training": {
      "Barbells": ["Olympic Barbell 20kg Men's","Women's Barbell 15kg","EZ Curl Bar","Hex/Trap Bar","Safety Squat Bar","Swiss Multi-Grip Bar","Cambered Bar","Spring Collar Pair","Lock-Jaw Collar Pair"],
      "Weight Plates": ["Olympic 1.25kg Pair","Olympic 2.5kg Pair","Olympic 5kg Pair","Olympic 10kg Pair","Olympic 15kg Pair","Olympic 20kg Pair","Olympic 25kg Pair","Bumper 5kg","Bumper 10kg","Bumper 15kg","Bumper 20kg","Bumper 25kg","Fractional Set 0.5-2.5kg","Cast Iron Standard 5kg","Cast Iron Standard 10kg"],
      "Dumbbells": ["Fixed Cast Iron 5kg Pair","Fixed 10kg Pair","Fixed 15kg Pair","Fixed 20kg Pair","Fixed 25kg Pair","Fixed 30kg Pair","Fixed 35kg Pair","Fixed 40kg Pair","Rubber Hex Set 5-25kg","Adjustable Selectorized 5-52.5lb","Adjustable 5-32.5kg","Neoprene 1-5kg Set","A-Frame Storage Rack","3-Tier Dumbbell Rack"],
      "Kettlebells": ["Cast Iron 4kg","Cast Iron 8kg","Cast Iron 12kg","Cast Iron 16kg","Cast Iron 20kg","Cast Iron 24kg","Cast Iron 28kg","Cast Iron 32kg","Adjustable Kettlebell 8-32kg","Competition Steel 16kg","Competition Steel 24kg","Rubber-Coated Kettlebell"],
      "Racks & Benches": ["Full Power Rack/Cage","Half Rack/Squat Stand","Simple Adjustable Squat Rack","Flat Weight Bench","Adjustable FID Bench","Olympic Bench with Rack","Preacher Curl Attachment","Dip Station Attachment","Cable Cross Machine","Smith Machine Multi-Purpose","Lat Pulldown/Low Row Station","Hyperextension Roman Chair"],
      "Resistance Machines": ["Leg Press 45°","Leg Extension","Lying Leg Curl","Seated Leg Curl","Hip Abduction/Adduction","Seated Calf Raise","Standing Calf Raise","Chest Press Machine","Pec Dec/Fly Machine","Shoulder Press Machine","Lat Pulldown Machine","Seated Row Machine","T-Bar Row Station","Assisted Chin-Up/Dip"],
      "Cardio Machines": ["Home Treadmill","Commercial Treadmill","Elliptical Cross-Trainer","Stair Climber Machine","Upright Stationary Bike","Recumbent Stationary Bike","Air Resistance Rowing Machine","Magnetic Rowing Machine","Water Resistance Rowing Machine","Air Assault Bike","SkiErg Machine","VersaClimber"],
      "Accessories": ["Leather Weightlifting Belt 10mm","Nylon Weightlifting Belt","Knee Sleeves 5mm Pair","Knee Wraps Competition Pair","Stiff Wrist Wraps 18\"","Flexible Wrist Wraps 12\"","Cotton Lifting Straps","Lasso Lifting Straps","Figure-8 Straps","Elbow Sleeves Pair","Deadlift Shin Shields","Chalk Block","Liquid Chalk","Chalk Bag","Foam Roller Standard","Textured Foam Roller","Trigger Point Mini Roller","Percussion Massage Gun","Resistance Band Loop Light","Resistance Band Loop Medium","Resistance Band Loop Heavy","Resistance Band Long Set","Doorframe Pull-Up Bar","Parallel Dip Handles","Ab Roller Wheel","Ab Sliders","Speed Cable Jump Rope","Weighted Jump Rope","Wooden Gymnastics Rings","Battle Rope 15m","Battle Rope 10m","TRX-Style Suspension Trainer","Adjustable Sandbag 20kg","Filler Sandbag 50kg"],
      "Apparel": ["Weightlifting Singlet Men's","Weightlifting Singlet Women's","IPF Powerlifting Singlet","Compression T-Shirt","Compression Shorts Men's","Compression Tights Women's","Training Shorts Men's","Training Shorts Women's","Training T-Shirt Men's","Tank Top Men's","Medium Support Sports Bra","High Support Sports Bra","Training Hoodie","Training Sweatpants","Training Tights Women's","Gym Ankle Socks","Gym Crew Socks","Gym Cap"],
      "Footwear": ["Raised Heel Weightlifting Shoes","Deadlift Slipper","Cross Training Shoes","Minimalist Gym Shoes","High Platform Squat Shoes"]
    },
    "Yoga": {
      "Mats": ["PVC Yoga Mat 6mm","TPE Eco Mat 6mm","Natural Rubber Mat 4mm","Cork Yoga Mat","Ultra-Thin Travel Mat","Hot Yoga Non-Slip Mat","Extra Long Mat 2.2m","Extra Wide Mat","Kids Yoga Mat","Ashtanga Mat"],
      "Props & Accessories": ["Foam Blocks Pair","Cork Blocks Pair","Cotton Strap 6ft","Strap 8ft","Yoga Blanket Foldable","Round Bolster","Rectangular Bolster","Yoga Wheel 12\"","Sandbag 5kg","Sandbag 10kg","Zafu Meditation Cushion","Seiza Meditation Bench","Inversion Swing/Hammock","Iyengar Chair"],
      "Apparel": ["Full Length Leggings","Capri Leggings","Shorts Women's","Light Support Sports Bra","Medium Support Sports Bra","Tank Top Yoga","Long Sleeve Top Yoga","Wrap Top Women's","Harem Pants Men's","Shorts Men's","Men's T-Shirt Yoga","Hot Yoga Shorts Men's","Non-Slip Grip Socks","Yoga Grip Gloves"],
      "Bags & Storage": ["Canvas Mat Bag","Mat Carry Strap","Yoga Backpack","Yoga Props Bag"],
      "Electronics": ["Tablet Stand Yoga Class","Streaming Device Yoga Videos"]
    },
    "Pilates": {
      "Equipment": ["Studio Professional Reformer","Home Use Reformer","Cadillac/Trapeze Table","Wunda Chair","Large Ladder Barrel","Spine Corrector Small Barrel","Extra-Thick Pilates Mat 8mm","Magic Circle Ring","Resistance Band Set Pilates","Foot Corrector Pilates","Step Barrel","Platform Box"],
      "Apparel": ["Full Length Leggings Pilates","Shorts Pilates","Sports Bra Pilates","Tank Top Pilates","Grip Socks Pilates","Grip Gloves Pilates","Long Sleeve Top Pilates","Wrap Cardigan"],
      "Accessories": ["Reformer Spring Set Replacement","Straps & Handles Set","Box Storage Bag","Small Ball 22cm Pilates"]
    },
    "CrossFit & Functional Fitness": {
      "Equipment": ["Plyo Box Wood 20/24/30\"","Soft Plyo Box Foam","Wall Ball 6kg","Wall Ball 9kg","Wall Ball 12kg","Wall Ball 15kg","D-Ball 15kg","D-Ball 25kg","D-Ball 40kg","GHD Machine","Air Assault Bike","Echo Fan Bike","Freestanding Pull-Up Rig","Kipping Pull-Up Bar","Wooden Muscle-Up Rings","Pegboard Climbing","Medicine Ball 4kg","Medicine Ball 6kg","Medicine Ball 8kg","Medicine Ball 10kg","Slam Ball 5kg","Slam Ball 10kg","Slam Ball 15kg","Slam Ball 20kg","Speed Bearing Jump Rope","Double Under Jump Rope","Weighted Jump Rope","Tire Flip Tractor Tire","Yoke Carry Frame"],
      "Apparel": ["CrossFit Training T-Shirt","CrossFit Tank Top","Lined Training Shorts Men's","Training Shorts Women's","Compression Tights CF","High Impact Sports Bra","CrossFit Hoodie","Knee-High Socks CF","No-Show Socks CF","CF Beanie"],
      "Footwear": ["Versatile CrossFit Trainer","Olympic Lifting Shoes CF","Rope Climb Shoes","Minimal CrossFit Shoes"],
      "Accessories": ["Hand Grips Protection","Jump Rope Cable Replacement","Gym Chalk Block","Liquid Chalk Grip","Workout Timer/Clock","WOD Board"]
    },
    "Home Gym": {
      "Equipment": ["All-in-One Multi-Station","Foldable Compact Home Gym","Foldable Wall-Mount Squat Rack","Home Cable Machine Pulley","Adjustable Dumbbell Set 5-50kg","Power Tower Pull-Up/Dip","Compact Magnetic Rower","Folding Home Treadmill","Folding Exercise Bike","Mini Stepper Machine","Decline Ab Bench","Adjustable Incline Bench"],
      "Flooring": ["Rubber Gym Tile 1m×1m","Rubber Flooring Roll 15m","EVA Foam Mat 25mm Interlocking","EVA Foam Mat 40mm Interlocking","Horse Stall Rubber Mat"],
      "Accessories": ["Mirror Wall Panel 120×40cm","Safety Spotter Arm","Cable Machine Handle Attachment","Cable Machine Rope","Cable Machine Ankle Strap","Straight Bar Attachment","Wide Lat Pulldown Bar"]
    },
    "Aerobics & Dance Fitness": {
      "Equipment": ["Step Platform Adjustable","Aerobic Step Riser (Pair)","Aerobic Step Pad","Zumba Maracas","Dance Fitness DVD/USB Set","Mini Trampoline Rebounder"],
      "Footwear": ["Aerobics Shoes Low Impact","Dance Fitness Shoes","Zumba Shoes"],
      "Apparel": ["Aerobics Leotard","Dance Fitness Leggings","Aerobics Sports Bra","Dance Top","Dance Shorts"],
      "Accessories": ["Ankle Weights Pair 0.5kg","Ankle Weights Pair 1kg","Ankle Weights Pair 2kg","Light Dumbbells 1kg Pair","Light Dumbbells 2kg Pair"]
    },
    "Mobility & Recovery": {
      "Equipment": ["Foam Roller Standard","Foam Roller Textured","Foam Roller Vibrating","Massage Gun Percussion Level 1","Massage Gun Percussion Level 2","Trigger Point Ball","Lacrosse Ball Set","Resistance Bands Mobility Set","Stretch Strap Multi-Loop","Yoga Strap Mobility","Inversion Table","Back Stretcher Arch","TENS Machine Recovery","Compression Boot Recovery","Whole-Body Cryotherapy Wrap"],
      "Accessories": ["Ice Pack Reusable","Heat Wrap Self-Heating","Athletic Tape 50mm","Athletic Tape 25mm","Kinesiology Tape Roll","Sports Tape Pre-Wrap","Epsom Salt Bag 2kg","Recovery Oil/Balm"]
    }
  },

  "🌊 Water Sports": {
    "Swimming": {
      "Swimwear": ["Jammers Competition Men's","Full Body Suit Men's","Open Back Suit Women's","Training Suit Men's","Training Suit Women's","Recreational Shorts Men's","Recreational Swimsuit Women's","Junior Boys Swimwear","Junior Girls Swimwear","Waterproof Swim Shorts"],
      "Goggles": ["Low Profile Racing","Anti-Fog Training","Wide Lens Open Water","Junior Goggles","Prescription Goggles","Mirrored Outdoor Goggles","Wide Mask Training Goggles"],
      "Caps": ["Adult Silicone Cap","Junior Silicone Cap","Latex Cap","Bubble Silicone Cap","Long Hair Cap","Thermal Swim Cap"],
      "Training Equipment": ["Standard Kickboard","Junior Kickboard","Figure-8 Pull Buoy","Standard Fins","Monofin","Short Blade Fins","Small Hand Paddles","Medium Hand Paddles","Large Hand Paddles","Centre-Mount Training Snorkel","Dryland Swim Bench","Resistance Tubing","Drag Suit","Drag Shorts","Swimming Parachute","Band Pull Training"],
      "Accessories": ["Ear Plugs","Nose Clip","Mesh Swim Bag","Dry Bag","Poolside Pace Clock","Wrist Lap Counter","Digital Lap Counter","Pool Noodle","Aqua Dumbbell"],
      "Electronics": ["Open Water GPS Watch","Performance Watch SWOLF","Underwater Headphones","Swim Metrics Tracker"]
    },
    "Surfing": {
      "Boards": ["Shortboard 5'8-6'4\"","Longboard 9-10ft","Fish Board","Funboard/Malibu","Hybrid Board","Gun Board Big Wave","Foam Soft-Top Learner","Foil Board Surfing","Junior Surf Board"],
      "Board Accessories": ["Surf Leash 6ft","Surf Leash 7ft","Surf Leash 8ft Competition","Coiled Surf Leash","Shortboard Bag","Longboard Bag","FCS II Tri Fin Set","FCS Single Fin","Futures Box Fin Set","Fin Key/Screw","Wax Cold Water","Wax Cool Water","Wax Warm Water","Wax Comb & Remover","Deck Traction Pad","Safety Nose Guard","Solar Ding Repair Kit"],
      "Wetsuits": ["Full 3/2mm Men's","Full 4/3mm Men's","Full 5/4mm Men's","Full Wetsuit Women's 3/2","Short Arm/Leg Springsuit 2mm","Long Sleeve Springsuit","Wetsuit Vest","Junior Wetsuit Boys","Junior Wetsuit Girls","Short Sleeve Rash Guard","Long Sleeve Rash Guard","Thermal Rash Guard","Booties 3mm","Booties 5mm","Wetsuit Gloves","Wetsuit Hood"],
      "Accessories": ["Car Surf Rack","Roof Rack Pad Pair","Deck Traction Pad","Zinc Sunscreen SPF50"]
    },
    "Stand-Up Paddleboarding": {
      "Boards": ["All-Around SUP 10ft","Touring SUP 12ft","Inflatable SUP 10ft","Inflatable SUP 11ft","Race SUP","Yoga SUP Wide","Junior SUP 8ft"],
      "Paddles": ["Aluminum SUP Paddle","Carbon SUP Paddle","Adjustable SUP Paddle","Junior SUP Paddle"],
      "Safety & Accessories": ["SUP Leash Coiled","SUP Leash Straight","PFD Life Vest SUP","Inflatable PFD","Pump Dual-Action SUP","SUP Repair Kit","Carry Bag/Backpack Inflatable","Fin Set SUP","SUP Deck Pad","Dry Bag 20L","Waterproof Phone Case"],
      "Apparel": ["SUP Wetsuit","SUP Rash Guard","SUP Shorts Quick-Dry","SUP Footwear Water Shoes"]
    },
    "Kayaking": {
      "Kayaks": ["Sit-In Recreational Kayak","Sea/Touring Kayak","Whitewater Playboat","Whitewater Creek Boat","Sit-On-Top Fishing Kayak","Inflatable 1-Person","Inflatable 2-Person","Racing K1","Junior Kayak","Foldable Kayak"],
      "Paddles": ["Aluminum Recreational Paddle","Carbon Touring Paddle","Carbon Whitewater Paddle","Feathered Blade Paddle","Junior Kayak Paddle"],
      "Safety & Protective": ["PFD Adult","PFD Junior","Whitewater Helmet","Spray Deck/Skirt","Neoprene Wetsuit Kayak","Dry Suit Kayak","Paddle Float Rescue","Safety Throw Rope","Bilge Pump Hand","Safety Whistle"],
      "Accessories": ["Kayak Cart/Trolley","Roof Rack Kayak","Foam Block Roof Rack","Dry Bag 10L","Dry Bag 20L","Dry Bag 40L","Upgrade Seat","Hatch Cover","Paddle Leash"],
      "Apparel": ["Kayak Full Wetsuit","Drytop/Dry Jacket","Neoprene Shorts","Paddling Gloves","Neoprene Booties","UV Paddling Sunshirt"]
    },
    "Canoeing": {
      "Canoes": ["Open Canoe 16ft Solo","Open Canoe 17ft Tandem","Inflatable Canoe","Racing Canoe C1","Racing Canoe C2"],
      "Paddles": ["Aluminum Canoe Paddle","Carbon Canoe Paddle","Beavertail Wood Paddle","Junior Canoe Paddle"],
      "Safety": ["PFD Adult Canoe","PFD Child","Canoe Throw Bag","Canoe Bailer"],
      "Accessories": ["Canoe Cart","Dry Bag 40L","Canoe Cover","Kneeling Pad Canoe"],
      "Apparel": ["Canoe Wetsuit","Quick-Dry Shorts","Canoe Jacket"]
    },
    "Rowing": {
      "Equipment": ["Single Scull Boat","Double Scull Boat","Quad Scull","Coxed Four","Eight Boat","Sweep Oar Single Blade","Scull Oar Double Blade","Oar Collar & Button","Air Resistance Ergo","Magnetic Ergo","Slide Rowing Machine"],
      "Apparel": ["Unitard Men's","Unitard Women's","Rowing Shorts Men's","Rowing Shorts Women's","Tech Long Sleeve Top","Rowing Jacket","Rowing Socks"],
      "Accessories": ["Rowing Gloves Grip","Foot Stretchers","Seat Pad Rowing","Ergometer Monitor Upgrade","Blade Cover","Boat Cover"]
    },
    "Sailing": {
      "Gear": ["Dinghy Sailing Harness","Trapeze Harness","Buoyancy Aid","Dry Suit Sailing","Sailing Wetsuit","Sailing Gloves Full Finger","Sailing Gloves Short","Sailing Boots","Deck Shoes Non-Slip"],
      "Apparel": ["Sailing Jacket Offshore","Sailing Jacket Inshore","Sailing Bibs","Sailing Trousers","Sailing Base Layer","Sailing Fleece Mid-Layer","Sailing Cap","Sailing Buff"],
      "Accessories": ["Sailing Knife","Rigging Knife","Boat Bag","Dry Bag Sailing","Marine Compass","Sailing Watch GPS","Lifejacket 150N","Harness Line Set"]
    },
    "Wakeboarding": {
      "Boards": ["Wakeboard Beginner 135-140cm","Wakeboard Intermediate","Wakeboard Advanced","Wakeboard Junior","Wakeboard Boat Package"],
      "Bindings": ["Wakeboard Bindings Open-Toe","Bindings Closed-Toe","Junior Bindings"],
      "Protective Gear": ["Wakeboard Helmet","Impact Vest/Life Jacket","Wetsuit 3/2mm Wakeboard"],
      "Accessories": ["Wakeboard Rope Handle","Wakeboard Rope 65ft","Wakeboard Bag","Wax Wakeboard"]
    },
    "Water Skiing": {
      "Skis": ["Combo Water Ski Set","Slalom Water Ski","Trick Ski","Junior Water Ski Set"],
      "Accessories": ["Ski Rope Handle","Ski Rope 65ft","Ski Bag","Ski Binder Adjustment"],
      "Protective Gear": ["Water Ski Life Jacket","Wetsuit Water Ski","Slalom Gloves"],
      "Apparel": ["Water Ski Wetsuit","Water Ski Shorts","Water Ski Top"]
    },
    "Windsurfing": {
      "Equipment": ["Windsurfer Board Complete","Windsurfer Sail 5.0m²","Windsurfer Sail 7.0m²","Boom Aluminum","Mast Carbon","Mast Extension","Universal Joint","Fin Set Windsurfer","Board Bag Windsurfer","Sail Bag"],
      "Protective Gear": ["Wetsuit Full Windsurf 4/3","Rash Guard Windsurf","Impact Vest","Harness Seat","Harness Waist","Harness Lines"],
      "Footwear": ["Windsurfing Boots","Wetsuit Booties"]
    },
    "Kitesurfing": {
      "Equipment": ["Kite 9m² Power","Kite 12m² All-Round","Kite Bar & Lines","Kiteboard Twin-Tip","Kiteboard Directional","Hydrofoil Board Kite","Pump Kite","Leash Kite Safety","Bag Kite Travel"],
      "Safety": ["Kitesurfing Helmet","Impact Vest Kite","Wetsuit Full 4/3","Harness Waist Kite","Harness Seat Kite","Quick-Release Bar","Safety Knife"],
      "Footwear": ["Kiteboard Boots","Fin Pads Kiteboard"]
    },
    "Snorkeling": {
      "Equipment": ["Snorkel Mask Basic","Snorkel Mask Full Face","Dry Snorkel Top","Semi-Dry Snorkel","Snorkel Fins Open Heel","Snorkel Fins Full Foot","Mesh Bag Snorkel","Defog Drops"],
      "Protective Gear": ["Lycra Stinger Suit","Rash Guard Short Snorkel"],
      "Accessories": ["Underwater Camera Case","Reef-Safe Sunscreen","Float Vest Junior"]
    },
    "Scuba Diving": {
      "Equipment": ["BCD Jacket Style","BCD Backplate Wing","BCD Travel Lightweight","First Stage Regulator","Second Stage Regulator","Wrist Dive Computer","Console Dive Computer","Wetsuit 3mm Full","Wetsuit 5mm Full","Membrane Drysuit","Neoprene Drysuit","Low Volume Dive Mask","Wide Vision Dive Mask","Open Heel Fins","Full Foot Fins","12L Dive Tank/Cylinder","Dive Weight Belt","Integrated Weight System","Dive Knife","SMB Marker Buoy","Primary Dive Light","Backup Dive Light","Underwater Compass","Analog Depth Gauge"],
      "Accessories": ["DIN Valve","A-Clamp Valve","Regulator Carry Bag","BCD Carry Bag","Underwater Slate","Torch Mount","O-Ring Replacement Kit","Mask Anti-Fog Drops"],
      "Apparel": ["UV50 Rash Guard Dive","Thermal Hooded Vest","Dive Gloves 3mm","Dive Gloves 5mm","Dive Booties 3mm","Dive Booties 5mm","Dive Hood 3mm","Dive Hood 5mm"]
    },
    "Fishing": {
      "Rods": ["Spinning Rod Light","Spinning Rod Medium","Spinning Rod Heavy","Baitcasting Rod","Fly Rod 9ft 5wt","Fly Rod 9ft 8wt","Telescopic Travel Rod","Sea/Surf Cast Rod","Ice Fishing Rod Short","Junior Fishing Kit Rod","Carp Rod 12ft 2.5lb TC"],
      "Reels": ["Spinning Reel 1000","Spinning Reel 2500","Spinning Reel 4000","Baitcasting Reel Low Profile","Fly Reel 5-6wt","Fly Reel 7-8wt","Trolling Conventional Reel","Ice Fishing Reel","Surf Cast Reel 6000+"],
      "Tackle & Lures": ["Monofilament Line 6lb","Monofilament Line 10lb","Monofilament Line 20lb","Braided Line 10lb","Braided Line 30lb","Fluorocarbon Leader","Sinking Jig Set","Soft Plastics Kit","Crankbait Hard Body","Topwater Popper Lure","Treble Hook Set","Single Hook Set","Swivels & Snaps Set","Sinker/Weight Set","Bobber/Float Set","Dry Fly Set","Nymph Fly Set","Streamer Fly Set"],
      "Apparel": ["Vented Fishing Shirt UPF50","Fishing Shirt Women's","Multi-Pocket Fishing Vest","Chest Waders","Waist Waders","Felt Sole Wading Boots","Rubber Studded Wading Boots","Fishing Rain Jacket","Waterproof Fishing Pants","Sun Protection Hat","Yellow Lens Polarized Glasses","Brown Lens Polarized Glasses","Cut-Resistant Fishing Gloves"],
      "Accessories": ["2-Layer Tackle Box","4-Layer Tackle Box","Stainless Fishing Pliers","Fish Lip Gripper","Rubber Mesh Landing Net","Dehooker Tool","Aerated Bait Bucket","Livewell Pump","Rod Pod/Rest System","Electronic Bite Alarm","Kayak Fish Finder","Fishing Headlamp Red Light","Fillet Knife","Fish Scaler","Portable Ice Fishing Shelter"],
      "Electronics": ["GPS Fish Finder Sonar","Electric Trolling Motor","Portable Depth Finder","Fishing Drone Camera"]
    }
  },

  "❄️ Winter Sports": {
    "Alpine Skiing": {
      "Skis": ["All-Mountain Men's","All-Mountain Women's","Beginner Carving Ski","Intermediate Carving Ski","Expert Carving Ski","GS Race Ski","SL Slalom Ski","DH Downhill Ski","Wide Freeride Ski","Park Twin-Tip Ski","Junior Carving Ski","Rental/Beginner Ski"],
      "Ski Boots": ["All-Mountain 100 Flex","Race 130 Flex","Beginner 70 Flex","Women's 80 Flex","Junior Ski Boots","Freeride Wide Last","Ski Boot Bag"],
      "Bindings": ["All-Mountain Alpine Binding","Race Alpine Binding","Adjustable Junior Binding","Demo/Rental Binding"],
      "Poles": ["Aluminum Adult Poles","Carbon Racing Poles","Women's Aluminum Poles","Junior Poles","Adjustable Telescopic Poles"],
      "Protective Gear": ["All-Mountain Ski Helmet","Race Helmet with Chin Guard","Junior Ski Helmet","Photochromic Lens Goggles","Contrast Lens Goggles","Junior Goggles","Back/Spine Protector","Racing Knee Guards","Racing Shin Guards","Ski Wrist Guards","Hip Airbag Vest","Avalanche Airbag Pack"],
      "Apparel": ["Insulated Ski Jacket Men's","Hardshell Jacket Men's","Women's Insulated Jacket","Men's Bib Ski Pants","Men's Regular Ski Pants","Women's Ski Pants","Thermal Baselayer Top","Thermal Baselayer Bottoms","Fleece Mid-Layer","Merino Wool Ski Socks","Insulated Gloves","Insulated Mitts","Neck Gaiter Ski","Balaclava","Ski Beanie","Junior One-Piece Suit","Junior 2-Piece Jacket+Pants"],
      "Accessories": ["Heated Boot Bag","Ski Lock","Ski Carry Strap","Rooftop Ski Carrier","Wall Storage Ski Rack","Electric Boot Dryer","Boot Wheels Bag","Edge Tuning Kit","Hot Iron Wax Kit","Wax Scraper & Cork","Edge Sharpener"],
      "Electronics": ["GPS Ski Watch","Avalanche Beacon ARVA","Avalanche Probe","Avalanche Shovel","Ski Performance Pod"]
    },
    "Snowboarding": {
      "Boards": ["All-Mountain Men's","All-Mountain Women's","Park/Jib Twin-Tip","Directional Freeride","Powder Board","Carving Race Board","Junior Board","Splitboard Backcountry"],
      "Boots": ["Soft Flex 3 Boots","Medium Flex 5 Boots","Stiff Flex 7 Boots","Women's Snowboard Boots","Junior Boots","Boa Lacing Boots"],
      "Bindings": ["Strap Binding Men's","Step-On Binding","Rear-Entry Binding","Women's Binding","Junior Binding"],
      "Protective Gear": ["Full Snowboard Helmet","MIPS Snowboard Helmet","Cylindrical Lens Goggles","Spherical Lens Goggles","Snowboard Wrist Guards","Hip Pad Shorts","Tailbone Protector Shorts","Back Protector Snowboard","Knee Pads Snowboard"],
      "Apparel": ["Insulated Jacket Men's","Jacket Women's","Pants Men's","Pants Women's","Baselayer Top","Baselayer Bottoms","Padded Snowboard Socks","Snowboard Gloves","Snowboard Mitts","Neck Gaiter Snowboard","Beanie Snowboard"],
      "Accessories": ["Stomp Pad","Board Leash","Travel Board Bag","Binding Screwdriver","All-Temp Wax","P-Tex Repair Candle","Board Lock","Shoulder Carry Straps"]
    },
    "Ice Skating": {
      "Skates": ["Figure Skates Women's Beginner","Figure Skates Women's Intermediate","Figure Skates Men's","Long Track Speed Skates","Short Track Speed Skates","Recreational Skates Men's","Recreational Skates Women's","Recreational Skates Junior","Double Blade Strap-On Kids"],
      "Protective Gear": ["Ice Skating Helmet","Knee Pads Ice Skating","Wrist Guards Ice Skating","Hip Protection Shorts Ice","Elbow Pads Ice Skating"],
      "Apparel": ["Figure Skating Dress","Figure Skating Pants Men's","Figure Skating Tights","Figure Skating Mitts","Speed Skating Skinsuit","Thermal Ice Skating Socks"],
      "Accessories": ["Soaker Blade Covers","Hard Walking Guards","Sharpening Stone","Beginner Balance Aid","Skating Carry Bag"]
    },
    "Cross-Country Skiing": {
      "Equipment": ["Classic XC Skis","Skate XC Skis","Classic XC Boots","Skate XC Boots","Classic XC Poles","Skate XC Poles","XC Bindings Classic","XC Bindings Skate"],
      "Apparel": ["XC Ski Suit Tight Fit","XC Ski Jacket","XC Ski Pants","XC Gloves","XC Ski Socks","XC Headband","XC Balaclava"],
      "Accessories": ["Kick Wax Kit","Glide Wax Kit","Wax Iron","Corking Block","XC Ski Bag"]
    },
    "Speed Skating": {
      "Equipment": ["Long Track Speed Skates Men's","Long Track Speed Skates Women's","Short Track Speed Skates","Clap Skate System","Speed Skating Blade Set"],
      "Apparel": ["Speed Skating Skinsuit Men's","Speed Skating Skinsuit Women's","Speed Skating Gloves","Speed Skating Helmet","Speed Skating Shin Guard"],
      "Accessories": ["Blade Cover Speed","Skate Sharpening Set Speed","Blade Guard Walking"]
    },
    "Freestyle Skiing": {
      "Equipment": ["Park/Pipe Twin-Tip Skis","Halfpipe Helmet","Park Ski Goggles","Back Protector Freestyle","Wrist Guards Freestyle"],
      "Apparel": ["Freestyle Jacket","Freestyle Pants","Park Gloves","Park Socks"],
      "Accessories": ["Ski Stomp Pad","Park Ski Bag"]
    },
    "Curling": {
      "Equipment": ["Curling Stone Set 16","Carbon Handle Broom","Junior Curling Broom","Slider Sole Shoe","Anti-Slip Gripper","Hack Rubber Attachment","Hog Line Sensor"],
      "Apparel": ["Curling Pants","Performance Top Curling","Curling Jacket","Grip Socks Curling","Grip Gloves Curling"],
      "Accessories": ["Stone Cover Set","Court Line Tape","Ice Thermometer","Magnetic Score Board"]
    },
    "Biathlon": {
      "Equipment": ["Biathlon Rifle .22 LR","Biathlon Carry Sling","Target System Electronic","Biathlon Shooting Mat"],
      "Apparel": ["Biathlon Race Suit","Biathlon Gloves","Biathlon Shooting Glove Right"],
      "Accessories": ["Biathlon Ammunition Holder","Biathlon XC Pole Set","Biathlon Boot Set"]
    }
  },

  "🚴 Cycling Sports": {
    "Road Cycling": {
      "Bicycles": ["Road Bike Aluminum Entry","Road Bike Mid-Range Carbon","Road Bike Pro Carbon","Aero Road Bike","Endurance Road Bike","Women's Road Bike","Junior Road Bike","Sportive Road Bike"],
      "Helmets": ["Aerodynamic Road Helmet","Vented Road Helmet","TT Time Trial Helmet","Junior Road Helmet","Women's Road Helmet"],
      "Protective Gear": ["Short Finger Gloves","Long Finger Gloves","Knee Warmers Cycling","Arm Warmers","Neoprene Overshoes","Clear Lens Glasses","Mirrored Cycling Glasses"],
      "Footwear": ["3-Bolt SPD-SL Shoes","2-Bolt SPD Shoes","Boa Lacing Road Shoes","Women's Road Shoes","Walkable Touring Shoes"],
      "Apparel": ["Summer Bib Shorts Men's","Thermal Bib Shorts Men's","Women's Cycling Shorts","Short Sleeve Jersey Men's","Long Sleeve Jersey","Wind Gilet/Vest","Rain Jacket","Thermal Jacket","Short Sleeve Baselayer","Long Sleeve Baselayer","Under-Helmet Cap","Thermal Overshoes","Low-Cut Socks","Women's Bib Tights","Women's Jersey"],
      "Components": ["11-Speed Groupset","Carbon Clincher Wheelset","Aluminum Wheelset","Tubeless Wheelset","Performance Saddle","Drop Handlebars","Stem Road","Brake Levers Road","Rim Caliper Brakes","Disc Brakes Road","Computer GPS Mount","Power Meter Pedal"],
      "Accessories": ["GPS Computer Entry","GPS Computer Advanced","SPD-SL Pedals","SPD Pedals","Water Bottle Cage","Water Bottle 500ml","Water Bottle 750ml","Small Saddle Bag","Large Saddle Bag","Top Tube Bag","Frame Bag","Handlebar Bag","Cycling Backpack 15L","Hydration Pack","D-Lock","Cable Lock","Front USB Light","Rear USB Light","Bike Bell","Tire Lever Set","Mini Pump","CO2 Inflator","Puncture Repair Kit","Wet Chain Lube","Dry Chain Lube","Cleaning Brush Set","Cleaning Solution","Chain Wear Checker"],
      "Electronics": ["GPS Computer Advanced","Power Meter Crankset","Single Leg Power Meter","HR Monitor Cycling","Smart Turbo Trainer","Entry Turbo Trainer"]
    },
    "Mountain Biking": {
      "Bicycles": ["Hardtail MTB Entry Trail","Hardtail XC Racing MTB","Full Suspension Trail MTB","Full Suspension Enduro MTB","Full Suspension DH MTB","Women's Trail MTB","Junior MTB 24\"","Junior MTB 26\""],
      "Protective Gear": ["Full Face DH Helmet","Open Face Trail Helmet","MIPS Trail Helmet","Full Face MTB Goggles","Hardshell Knee Pads","Softshell Knee Pads","MTB Elbow Pads","Padded Liner Shorts","Full Body Armor MTB","Wrist Guards MTB","Short Finger Gloves","Long Finger Gloves"],
      "Footwear": ["Clipless SPD Shoes","Flat Pedal Shoes","Women's MTB Shoes","DH Stiff Shoes","Junior MTB Shoes"],
      "Apparel": ["Short Sleeve Jersey","Long Sleeve Jersey","Shorts with Liner","Shorts without Liner","MTB Tights","MTB Jacket","MTB Rain Jacket","MTB Base Layer","Crew Length Socks","Women's MTB Jersey","Women's MTB Shorts"],
      "Accessories": ["Aluminum Flat Pedals","Composite Flat Pedals","SPD Clipless Pedals","XC Tires 29×2.35","Trail Tires 27.5×2.6","Enduro Tires 29×2.5","Tubeless MTB Kit","Tire Inserts MTB","MTB Saddle","Dropper Post 125mm","Dropper Post 150mm","Fork Oil Service Kit","12-Speed Chain","12-Speed Cassette","Spine Protector Hydration 2L","MTB Backpack 15L","Trail Multi-Tool","Tubeless Tire Plug Kit","Cycling First Aid Kit Trail"]
    },
    "BMX": {
      "Bicycles": ["BMX Race Junior","BMX Race Elite","Park/Street Freestyle","Flatland BMX","Dirt Jump BMX","BMX Cruiser 24\"","Complete Entry Level BMX"],
      "Protective Gear": ["Full Face BMX Helmet","Half Shell BMX Helmet","MX-Style Goggles BMX","Knee Pads BMX","Elbow Pads BMX","Short Finger Gloves BMX","Shin Guards BMX","Race Number Plate"],
      "Footwear": ["Flat Skate-Style Shoe","Clipless BMX Shoe"],
      "Apparel": ["Race Plate Jersey","Race Pants BMX","Race Shorts BMX","BMX Socks"],
      "Accessories": ["Platform Pedals","Grip Pair","Bars/Handlebars BMX","Single Speed Chain","BMX Sprocket","BMX Tires 20×2.0","Junior Protective Set"]
    },
    "Gravel Cycling": {
      "Bicycles": ["Gravel Bike Steel","Gravel Bike Carbon","Adventure Gravel Bike"],
      "Accessories": ["Gravel Tires 700×38c","Gravel Tires 700×45c","Bikepacking Frame Bag","Bikepacking Handlebar Bag","Bikepacking Saddle Bag XL","Gravel Pedals SPD","Gravel GPS Computer"],
      "Apparel": ["Gravel Bib Shorts","Gravel Jersey","Gravel Rain Jacket","Merino Baselayer"]
    },
    "Track Cycling": {
      "Bicycles": ["Track/Velodrome Bike","Track Fixed Wheel Conversion"],
      "Apparel": ["Track Cycling Skinsuit","Track Helmet Aero"],
      "Accessories": ["Track Pedals Toe Clip","Fixed Gear Cog Set","Track Saddle"]
    },
    "Triathlon": {
      "Equipment": ["TT Triathlon Bike Frame","Aerobar Extension","Transition Bag/Mat","Race Number Belt Tri","Timing Chip Strap","Open Water Swim Buoy","Full Triathlon Wetsuit","Sleeveless Triathlon Wetsuit"],
      "Apparel": ["Short Sleeve Trisuit Men's","Short Sleeve Trisuit Women's","Long Sleeve Trisuit","Tri Shorts Men's","Tri Top Men's","Tri Shorts Women's","Quick-Dry Tri Socks","Triathlon Cap"],
      "Footwear": ["Quick-Lace Running Shoes Tri","Triathlon Cycling Shoes","Transition Sandal"],
      "Accessories": ["Wetsuit Lubricant","Transition Mat","Elastic No-Tie Laces","Tri Multisport GPS Watch"],
      "Electronics": ["Tri Multisport Watch","Swim GPS Watch","Triathlon Power Meter"]
    },
    "Cyclocross": {
      "Bicycles": ["Cyclocross Bike Aluminum","Cyclocross Bike Carbon"],
      "Accessories": ["CX Tires 700×33c","CX Tires 700×40c","Cantilever Brakes CX","CX Barriers Set"],
      "Apparel": ["CX Race Skinsuit","CX Jacket Waterproof","CX Gloves Waterproof"]
    },
    "E-Biking": {
      "E-Bikes": ["E-Road Bike","E-Mountain Bike","E-City Commuter Bike","E-Cargo Bike","E-Folding Bike"],
      "Accessories": ["E-Bike Battery Replacement","E-Bike Charger","E-Bike Handlebar Computer","E-Bike Pannier Bags","E-Bike Lock Heavy Duty"]
    }
  },

  "🏔️ Outdoor & Adventure": {
    "Camping": {
      "Shelter": ["1-Person Backpacking Tent Ultralight","2-Person Backpacking Tent","3-Person Family Tent","4-Person Family Tent","6-Person Car Camping Tent","10-Person Group Tent","Hammock Camping Nylon","Bivvy Emergency Bag","Tarp Shelter 3×3m","Camping Groundsheet/Footprint"],
      "Sleeping": ["Down Sleeping Bag 0°C","Down Sleeping Bag -10°C","Synthetic Sleeping Bag 5°C","Synthetic Sleeping Bag -5°C","Junior Sleeping Bag","Silk Sleeping Liner","Self-Inflating Sleeping Pad","Foam Sleeping Pad","Ultralight Air Sleeping Pad","Inflatable Camping Pillow"],
      "Cooking": ["Gas Stove Single Burner","Dual Burner Camp Stove","Wood Burning Camp Stove","Gas Canister 230g","Titanium Cookset 2-Person","Aluminum Cookset 4-Person","Camp Cup 500ml","Camp Kettle 1L","Enamel Camp Plate","Camp Cutlery Set","Portable Coffee Press","Washing Basin Camp","Water Filter Purifier","Water Purification Tablets"],
      "Lighting": ["Headlamp 300 Lumen","Headlamp 1000 Lumen","Rechargeable Headlamp","Foldable LED Lantern","Gas Camp Lantern","Solar Inflatable Lantern"],
      "Furniture": ["Lightweight Folding Chair","Ultralight Chair","Folding Camp Table","Folding Camp Cot","Folding Camp Stool","Hammock Stand Steel"],
      "Tools": ["Camping Multi-Tool","Fixed Blade Camp Knife","Folding Camp Knife","Camp Axe/Hatchet","Folding Camp Saw","Tent Peg Stake Set 20","Tent Repair Kit","Guy Line Cord Set"],
      "Hygiene": ["LNT Camp Trowel","Solar Shower Bag","Biodegradable Soap","Camp Toiletry Bag","Portable Waste Bags"],
      "Bags & Carry": ["30L Hiking Daypack","50L Trekking Pack","70L Expedition Pack","Compression Stuff Sack Set","5L Dry Sack","20L Dry Sack","Bear Canister Food Storage","Rope 6mm 30m"]
    },
    "Hiking & Trekking": {
      "Footwear": ["Low Cut Hiking Boot Men's","Mid Cut Hiking Boot Men's","High Cut Hiking Boot Men's","Women's Low Boot","Women's Mid Boot","Waterproof Boot Men's","Waterproof Boot Women's","Hiking/Trail Hybrid Shoe","Junior Hiking Boot","Sport Hiking Sandal"],
      "Poles": ["Aluminum Trekking Poles Pair","Carbon Trekking Poles Pair","Single Telescopic Pole","Foldable Poles Pair","Replacement Pole Basket","Replacement Pole Tip"],
      "Apparel": ["Merino Wool Hiking T-Shirt","Synthetic Hiking T-Shirt","Long Sleeve Hiking Shirt","UPF Sun Protect Shirt","Convertible Hiking Pants Men's","Softshell Hiking Pants","Hiking Pants Women's","Windproof Hiking Jacket","Waterproof Hiking Jacket","Fleece Mid-Layer","Merino Cushion Hiking Socks","Liner Socks Blister Prevention","Wide Brim Hiking Hat","Low Gaiters","High Gaiters","Hiking Gloves"],
      "Backpacks": ["15L Daypack","20L Hiking Daypack","40L Trekking Pack","55L Trekking Pack","65L Women's Pack","80L Expedition Pack","2L Hydration Pack Hiking","Hip Pack/Bum Bag","Kid Carrier Backpack"],
      "Navigation": ["Orienteering Baseplate Compass","Sighting Mirror Compass","Handheld GPS Device Topo","Topographic Map Case","Altimeter GPS Watch","Trail Guidebook Set"],
      "Safety": ["Personal Locator Beacon","2-Way Satellite Communicator","Pealess Emergency Whistle","Signal Mirror","Ferrocerium Fire Starter","Mylar Emergency Blanket","20-Item Trail First Aid Kit"]
    },
    "Rock Climbing & Bouldering": {
      "Ropes": ["Dynamic Rope 9.2mm 60m","Dynamic Rope 10mm 70m","Static Rope 11mm","Dry Treated Rope 9.4mm","Half Rope 8.6mm 60m","Twin Rope Set"],
      "Harnesses & Hardware": ["Sport Harness Men's","Sport Harness Women's","Traditional Harness Men's","Junior Climbing Harness","ATC Belay Device","Assisted Brake Belay Device","Auto-Locking Grigri Belay","HMS Pear Carabiner","Oval Carabiner","D-Shape Carabiner","Screwgate Locking Carabiner","Autolock Carabiner","Quickdraw Set 6-Pack","Alpine Quickdraw Set","Nut Set Passive 1-10","SLCD Cam Set 0.5-3","Dyneema Sling 60cm","Nylon Sling 120cm","Cordelette 5mm Cord","Nut Key/Remover","Anchor Kit","Left Ascender/Jumar","Right Ascender/Jumar","Figure-8 Descender","Prussik Loop 6mm"],
      "Footwear": ["Beginner Velcro Shoe","Intermediate Lace Shoe","Performance Velcro Shoe","Crack Specialist Shoe","High Performance Bouldering Shoe","Women's Climbing Shoe"],
      "Helmets": ["Polystyrene Climbing Helmet","Hybrid Climbing Helmet","Lightweight Climbing Helmet","Junior Climbing Helmet"],
      "Bouldering Gear": ["Large Crash Pad","Compact Crash Pad","Bouldering Chalk Bag","Chalk Ball","Chalk Block","Liquid Chalk","Gym Bouldering Mat","Gym Hold Set 50-Pack","Textured Hold Set"],
      "Apparel": ["Climbing Pants Men's","Climbing Pants Women's","Climbing Shorts","Climbing T-Shirt","Long Sleeve Climbing","Climbing Hoodie","Climbing Softshell Jacket"],
      "Accessories": ["Toothbrush Style Brush","Extended Handle Brush","Athletic Finger Tape","Finger Pulley Taper Aid","Rope Bag/Tarp","Gear Sling/Bandolier","Helmet Bag Climbing"]
    },
    "Archery": {
      "Bows": ["Recurve Takedown Adult","Junior Recurve Bow","Olympic Recurve Limbs","Recurve Riser Only","Recurve Limbs Pair","Adjustable Draw Compound","Compound Target Bow","Hunting Compound Bow","Traditional Longbow","Hunting Crossbow","Target Crossbow","Beginner Bow Kit"],
      "Arrows": ["Carbon Target Arrows 8-Pack","Aluminum Arrows 8-Pack","Traditional Wooden Arrows 6-Pack","Crossbow Bolts 12-Pack","Bullet Point Tips","Broadhead Tips","Fletching Set","Nock Set","Arrow Insert"],
      "Protective Gear": ["Arm Guard Archery","Chest Guard Archery","3-Finger Archery Glove","Leather Tab","Wrist Strap Release Aid","Index Finger Release Aid"],
      "Targets": ["Straw Target Butt 80cm","Paper Target Face 40cm","3D Animal Target","Folding Target Stand","EVA Foam Target Mat"],
      "Accessories": ["Magnetic Arrow Rest","Whisker Biscuit Rest","3-Pin Fixed Sight","Adjustable 1-Pin Sight","Short Stabilizer","Long Balance Stabilizer","Limb Tip Dampener","Bow Stringer Tool","Arrow Puller","Arrow Fletching Jig","Hip Belt Quiver","Leather Back Quiver","Hard Shell Bow Case","Soft Bow Case"],
      "Bags & Storage": ["Arrow Travel Tube","Recurve Bow Bag","Compound Hard Case","Archery Equipment Bag"]
    },
    "Golf": {
      "Clubs": ["Driver Men's","Driver Women's","Driver Junior","Fairway Wood 3-Wood","Fairway Wood 5-Wood","Hybrid 3H","Hybrid 4H","Iron Set 4-9+PW Men's Regular","Iron Set Women's Regular","Iron Set Senior Flex","Junior Iron Set","Pitching Wedge","Sand Wedge 56°","Lob Wedge 60°","Blade Putter","Mallet Putter","Junior Putter","Men's 12-Club Complete Set","Women's Complete Set","Junior 7-Club Set"],
      "Balls": ["3-Piece Surlyn Dozen","3-Piece Urethane Tour Dozen","4-Piece Tour Dozen","2-Piece Distance Dozen","Women's Soft Dozen","Junior Ball Dozen","Practice Range Ball Mesh Dozen","Indoor Foam Ball 6-Pack"],
      "Bags": ["Stand Carry Bag","Cart Bag","Tour Staff Bag","Hard Case Travel Bag","Soft Cover Travel Bag","Sunday Small Bag","Junior Golf Bag"],
      "Footwear": ["Spiked Shoes Men's","Spikeless Shoes Men's","Waterproof Shoes Men's","Spiked Shoes Women's","Spikeless Shoes Women's","Golf Sandals","Junior Golf Shoes"],
      "Apparel": ["Golf Polo Men's","Golf Polo Women's","Golf T-Shirt","Golf Shorts Men's","Golf Trousers Men's","Golf Skirt Women's","Golf Skort Women's","Golf Socks","Left Hand Glove Men's","Right Hand Glove","Women's Left Glove","Winter/Rain Glove","Rain Jacket Golf","Windbreaker Golf","Golf Gilet","Golf Cap","Golf Sun Visor","Golf Beanie","Thermal Baselayer Golf"],
      "Accessories": ["Wooden Tees 100-Pack","Plastic Tees Set","Ball Marker Set","Divot Repair Tool","Spike Wrench Golf","Groove Cleaner","Grip Replacement Set","Grip Solvent","Waffle Clip Towel","Laser Rangefinder","GPS Golf Watch","GPS Handheld Device","3-Wheel Push Trolley","Electric Golf Trolley","Golf Umbrella 68\"","Driver & Woods Head Covers","Putter Cover","Iron Head Cover Set","Scorecard Holder","Yardage Book Holder"],
      "Practice Equipment": ["Indoor Putting Mat 3m","Putting Aid Cup Hole","Practice Net 10ft","Impact Screen","Entry Launch Monitor","Advanced Launch Monitor","Chipping Net Target","Swing Analyzer Sensor","Swing Plane Trainer","Swing Weight Ring","Impact Bag Trainer"],
      "Electronics": ["Premium GPS Watch Golf","Laser Rangefinder Slope","Swing Analyzer + Sensor","Golf Simulator Screen Package"]
    },
    "Skateboarding": {
      "Boards": ["Complete 7.5\" Board","Complete 8.0\" Board","Complete 8.25\" Board","Deck Only 8.0\"","Longboard Cruiser 38\"","Longboard Downhill 40\"","Penny Board 22\"","Mini Cruiser 27\"","Junior Complete 7.0\""],
      "Components": ["Trucks 139mm Set","Trucks 149mm Set","Wheels 52mm 99a","Wheels 54mm 101a","Longboard Wheels 70mm 78a","Bearings ABEC 7 Set 8","Griptape Sheet Black","Riser Pads Set","Hardware Bolts 7/8\" Set"],
      "Protective Gear": ["CPSC Skate Helmet","Knee Pads Set","Elbow Pads Set","Wrist Guards Set","Beginner Full Protect Pack","Padded Shorts"],
      "Footwear": ["Vulcanized Low Shoe","Cupsole Shoe","High Top Skate Shoe","Women's Skate Shoe","Junior Skate Shoe","Inner Sole Skate"],
      "Apparel": ["Loose Skate T-Shirt","Skate Hoodie","Skate Denim Jeans","Skate Shorts","Crew Socks Skate","Skate Cap"],
      "Accessories": ["Multi-Function Skate Tool","Rail Wax Block","Ledge Wax Candle","Skate Bag"]
    },
    "Paragliding": {
      "Equipment": ["Paraglider Wing EN-A","Paraglider Wing EN-B","Paraglider Wing EN-C","Reserve Parachute","Paragliding Harness Standard","Paragliding Harness Competition","Helmet Paragliding","Speedbar Paragliding","Variometer/GPS Flight Computer","Radio Transceiver","Wind Sock Indicator"],
      "Apparel": ["Paragliding Flight Suit","Paragliding Jacket","Paragliding Gloves","Paragliding Boots"],
      "Accessories": ["Wing Bag/Rucksack","Harness Carry Bag","Carabiner Set Paragliding","First Aid Kit Flying"]
    },
    "Skydiving": {
      "Equipment": ["Parachute Container/Rig (AAD)","AAD Automatic Activation Device","Reserve Parachute Round","Main Canopy Sport","Altimeter Analogue","Altimeter Digital","Audible Altimeter"],
      "Protective Gear": ["Skydiving Helmet Full","Skydiving Helmet Open Face","Skydiving Goggles","Gloves Skydiving","Jump Suit Freefly","Jump Suit Formation"],
      "Accessories": ["Log Book Skydiving","Deployment Bag","Packing Mat","Weight Belt Skydiving"]
    },
    "Orienteering": {
      "Equipment": ["Baseplate Compass Thumb","Baseplate Compass Finger","Orienteering Map Case","Whistle Emergency","Control Flag Set","Punch Set Orienteering","GPS Sports Watch Orienteering"],
      "Apparel": ["Orienteering Suit Stretch","Orienteering Shorts","Orienteering Gaiters Low","Orienteering Shoes Spike"],
      "Accessories": ["Control Description Holder","Number Bib Orienteering","Compass Lanyard"]
    },
    "Hunting": {
      "Equipment": ["Hunting Backpack 60L","Game Bag Set","Field Dressing Kit","Hunting Knife","Hunting Binoculars","Hunting Rangefinder","Trail Camera","Bow Hunting Broadhead Set","Tree Stand Climbing","Ground Blind Hunting"],
      "Apparel": ["Hunting Camo Jacket","Hunting Camo Pants","Blaze Orange Vest","Hunting Base Layer","Hunting Boots Insulated","Hunting Gloves","Hunting Face Mask","Hunting Socks Thermal"]
    },
    "Canyoning": {
      "Equipment": ["Canyoning Harness","Descender Device Canyoning","Canyoning Helmet","Dry Bag 20L Canyoning","Throwbag Water","Wetsuit 5mm Canyoning","Canyoning Shoes","Rope 10.5mm 50m Static","Webbing Sling Set"],
      "Accessories": ["Carabiner Set Locking","Anchor Device Canyoning","First Aid Kit Water"]
    }
  },

  "🎯 Precision & Target Sports": {
    "Darts": {
      "Darts": ["Steel Tip 22g","Steel Tip 24g","Steel Tip 26g","Soft Tip 18g","Soft Tip 20g","Junior Soft Tip","Magnetic Safe Darts Kids","Tungsten Barrels Only","Standard Flights Set 3","Slim Flights Set 3","Nylon Stems Short","Aluminum Stems Medium","Stems Long"],
      "Dartboards": ["Official Bristle Board","Electronic Dartboard","Junior Magnetic Board","Soft Foam Kids Board","Dartboard Cabinet Set","Foam Surround Ring"],
      "Accessories": ["Aluminum Darts Case","Soft Wallet Case","Dart Sharpener","Dart Extractor Tool","Wall Mount Holder","Chalk Scoreboard","Magnetic Scoreboard","Oche Throw Line Mat"]
    },
    "Billiards / Pool / Snooker": {
      "Tables": ["Pool Table 7ft Bar","Pool Table 8ft Home","Pool Table 9ft Tournament","Snooker Table 10ft","Snooker Table 12ft Full","Folding Billiard Table","Mini Pool Table"],
      "Cues": ["Pool Cue 1-Piece 57\"","Pool Cue 2-Piece","Pool Cue Case 2×4","Snooker Cue Ash 57\"","Composite Snooker Cue","House Cue Set + Rack","Jump Cue","Break Cue"],
      "Balls": ["American Pool Set 16","Snooker Set 22","Carom Billiard Set 3","Spare Cue Ball Pool"],
      "Accessories": ["Triangle Rack Pool","Diamond Rack Pool","Snooker Cross Rest","Snooker Spider Rest","Chalk Cube Pack","Cue Tip Replacement","Cue Tip Shaper/Scuffer","Horsehair Table Brush","Table Cover Cloth","Green Table Cloth Replacement"]
    },
    "Bowling": {
      "Balls": ["Polyester 12lb Entry","Bowling Ball 14lb","Performance Ball 16lb","Women's Ball 10lb","Junior Ball 8lb","Candlepin Ball","Duckpin Ball"],
      "Equipment": ["Single Ball Bag","Double Ball Bag","Men's Slide Shoes Left","Women's Bowling Shoes","Bowling Wrist Support","Bowling Glove","Bowling Towel","Finger Insert Set"],
      "Accessories": ["Pin Set 10","Portable Lane Mat","Ball Polish Spinner","Athletic Thumb Tape"]
    },
    "Bocce / Pétanque / Boules": {
      "Balls": ["Bocce Ball Set 8","Pétanque Boules Set Stainless","Pétanque Boules Set Soft","Pallino/Jack Ball Set","Lawn Bowls Set 4"],
      "Accessories": ["Bocce Carry Bag","Measuring String/Tool","Bocce Court Mat Portable","Scoring Board Bocce"]
    },
    "Shooting Sports": {
      "Equipment": ["Air Rifle 10m Target","Air Pistol 10m Target",".22 LR Rimfire Rifle","Clay Pigeon Shotgun","Manual Clay Trap","Automatic Clay Thrower"],
      "Protective Gear": ["Right Shooting Jacket Leather","Yellow Lens Shooting Glasses","27dB Ear Muffs","Electronic Ear Muffs","33dB Ear Plugs Foam","Right Shooting Glove","Cheek Rest Pad","Prone Shooting Mat"],
      "Targets": ["10m Air Pistol Paper 100","Rifle Paper Target 100","Steel Silhouette Set","Reactive Splatter Target Pack"],
      "Accessories": ["Universal Cleaning Kit","Scope Mount Rail","Adjustable Bipod","Cleaning Solvent & Oil","Shooting Sandbag Rest","Soft Gun Case","Lockable Gun Safe Box"]
    }
  },

  "🎮 Indoor Games & Recreation": {
    "Chess": {
      "Sets & Pieces": ["Wood Folding Set + Pieces","Tournament Vinyl + Pieces","Junior Plastic Set","Digital Chess Clock","Mechanical Analog Clock","Tournament Pieces Staunton Size 6","Magnetic Travel Chess Set"],
      "Training": ["Puzzle Book Beginner","Puzzle Book Advanced","Chess Analysis Software","Coaching App Subscription"]
    },
    "Carrom": {
      "Boards": ["Full Size Board 29\"","Junior Board 20\"","Premium Plywood Board","Mini Portable Board"],
      "Accessories": ["Full Coins Set","Striker Set Carrom","Boric Acid Powder","Net Set Carrom","Replacement Pockets","Board Legs Set"]
    },
    "Table Football / Foosball": {
      "Tables": ["Home Use Foosball Table","Professional Tournament Table","Tabletop Mini Foosball","Outdoor Weatherproof Table"],
      "Accessories": ["Replacement Men Set","Balls 10-Pack","Replacement Rod Set","Table Cover Foosball"]
    },
    "Air Hockey": {
      "Tables": ["Full Size 7ft Table","5ft Home Table","Tabletop Mini Air Hockey","LED Lights Air Hockey Table"],
      "Accessories": ["Puck Set Air Hockey","Pushers/Mallets Set","Replacement Motor Fan","Table Cover Air Hockey"]
    },
    "Pool / Billiards Table Games": {
      "Tables": ["Shuffleboard Table 9ft","Crokinole Board","Finger Billiards Table"],
      "Accessories": ["Shuffleboard Pucks Set","Shuffleboard Wax Powder","Crokinole Discs Set"]
    },
    "Board & Card Games": {
      "Strategy Games": ["Chess Premium Edition","Go Set Bamboo","Backgammon Leather Set","Risk Classic Edition","Catan Board Game","Scrabble Classic"],
      "Family Games": ["Jenga Classic","Connect 4","Twister Game","Trivial Pursuit","Pictionary","Cranium","Ticket to Ride"],
      "Card Games": ["UNO Classic","Skip-Bo","Phase 10","Standard Playing Cards Deck","Poker Chip Set 300pc"],
      "Outdoor Lawn Games": ["Cornhole Set","Giant Jenga Outdoor","Bocce Set Outdoor","Croquet Set 6-Player","Kubb Viking Game Set","Ladder Toss Game","Horseshoe Set","Spikeball Set"]
    }
  },

  "🖥️ Esports & Gaming": {
    "Console Gaming": {
      "Controllers & Accessories": ["Wireless Gaming Controller","Wired Gaming Controller","Pro Tournament Controller","Dual Controller Charging Stand","Controller Grip Case","Thumbstick Replacement Set","Headset Console Surround Sound","Console Vertical Stand","Console Fan Cooler","Gaming TV Stand"],
      "Storage": ["External SSD 1TB Gaming","USB Hub Console 7-Port","Game Case Protective Set"]
    },
    "PC Gaming": {
      "Peripherals": ["DPI High Gaming Mouse 25600","Wireless Gaming Mouse","XL Gaming Mouse Pad","RGB Gaming Mouse Pad","Mechanical Keyboard TKL","Full Mechanical Keyboard","Membrane Gaming Keyboard","27\" 165Hz Monitor","24\" 240Hz Monitor","Curved Ultrawide Monitor","7.1 Surround PC Headset","1080p Webcam","USB Condenser Microphone","Stream Deck Controller","External Capture Card","USB Hub 7-Port","Single Articulating Monitor Arm"],
      "Components": ["Tower CPU Cooler Gaming","DDR5 32GB RAM","Graphics Card GPU","NVMe SSD 1TB","ATX Mid-Tower Case","750W Power Supply","Z790 Gaming Motherboard"],
      "Chairs & Furniture": ["Racing Style Gaming Chair","Ergonomic Mesh Gaming Chair","L-Shaped Gaming Desk","Height Adjustable Desk","Monitor Stand Riser","Cable Management Kit"]
    },
    "Sim Racing": {
      "Wheels & Pedals": ["Entry 900° Wheel","Direct Drive Wheel Base","Wheel Base Only","Formula Wheel Rim","2-Pedal Entry Set","3-Pedal Advanced Set","Load Cell Brake Pedal","Sequential Shifter","H-Pattern Shifter","Hydraulic Sim Handbrake"],
      "Cockpits & Rigs": ["Budget Sim Cockpit","Aluminum Profile Rig","Budget Racing Seat","3DOF Motion Platform","Triple Screen Monitor Stand","VR Headset Mount Racing"],
      "Accessories": ["Sim Racing Gloves","Racing Suit Sim","Wheel Quick Release"]
    },
    "VR Gaming": {
      "Equipment": ["Tethered VR Headset Premium","Standalone VR Headset","VR Controller Set Pair","Motion Sickness Band","Retractable Cable Management","VR Guardian Play Mat","Hygiene Headset Cover","Lens Protector VR","Prescription Lens Insert VR"],
      "Accessories": ["Grip Cover Set VR","Body Tracking Set","Haptic Gloves VR","Omni Platform Treadmill VR"]
    },
    "Gaming Accessories": {
      "Audio": ["Gaming Headset 7.1 PC","Wireless Gaming Headset","Earbuds Gaming Low Latency","DAC Amp Gaming","Boom Microphone Desktop"],
      "Lighting": ["RGB LED Strip Gaming","LED Key Light Streaming","Bias Lighting Monitor","RGB Gaming Desk Lamp"],
      "Organization": ["Cable Management Box","Headset Stand Desk","Controller Wall Mount","Cable Sleeve Kit","Desk Mat XL Leather"]
    }
  },

  "👕 Universal Sports Apparel": {
    "Men's Apparel": {
      "Tops": ["Sports Jersey Polyester","Performance T-Shirt Dry-Fit","Training Polo","Athletic Tank Top","Compression Short Sleeve","Compression Long Sleeve","Baselayer Thermal","Baselayer Cool","Rashguard Short Sleeve","Rashguard Long Sleeve","Hoodie Sports Fleece","Full Zip Jacket","Quarter Zip Top","Gym String Vest"],
      "Bottoms": ["Athletic Shorts 5\"","Athletic Shorts 7\"","Athletic Shorts 9\"","Training Jogger Pants","Tracksuit Bottoms","Compression Shorts","Compression Tights Full","3/4 Compression Tights","Sweatpants Heavy","Wind Pants Lightweight","Convertible Training Pants"],
      "Full Sets": ["Tracksuit Set Poly","Compression Full Set","Sports Pajama Set","Recovery Tights + Top Set"],
      "Outerwear": ["Running Jacket Lightweight","Wind Jacket Packable","Rain Jacket Waterproof","Insulated Gilet/Vest","Softshell Jacket","Fleece Jacket","Puffer Jacket Sports","Training Anorak"],
      "Socks": ["No-Show Ankle Socks","Crew Length Socks","Knee-High Sports Socks","Compression Socks","Merino Wool Socks","Anti-Blister Socks","Thin Running Socks","Padded Cushion Socks"],
      "Headwear": ["Mesh Running Cap","Structured Sports Cap","Trucker Sports Cap","Sports Beanie","Thermal Running Hat","Visor Men's","Headband Sports","Skull Cap Thermal"]
    },
    "Women's Apparel": {
      "Tops": ["Sports Jersey Women's","Performance T-Shirt Women's","Training Polo Women's","Athletic Tank Top Women's","Compression Short Sleeve","Compression Long Sleeve","Baselayer Thermal","Rashguard","Hoodie Sports","Full Zip Jacket Women's","Crop Tank Workout","Sports Crop Top","Training Bra-Top","Long Sleeve Training Top"],
      "Bottoms": ["Athletic Shorts 3\"","Athletic Shorts 5\"","Compression Shorts Women's","Full Length Leggings","3/4 Length Leggings","Capri Leggings","Training Jogger Women's","Sweatpants Women's","Skort Sports","Sports Skirt"],
      "Sports Bras": ["Light Support Bra","Medium Support Bra","High Support Bra","Racerback Bra","Longline Bra","Compression Crop Bra","Underwire Sports Bra"],
      "Outerwear": ["Running Jacket Women's","Wind Jacket Women's","Rain Jacket Women's","Insulated Gilet Women's","Fleece Jacket Women's","Softshell Women's"],
      "Socks": ["No-Show Socks Women's","Crew Sports Socks","Knee-High Socks Women's","Compression Socks Women's","Merino Wool Women's","Anti-Blister Women's"],
      "Headwear": ["Sports Cap Women's","Running Visor","Sports Beanie Women's","Headband Women's","Ponytail Cap"]
    },
    "Boys' Apparel": {
      "Tops": ["Boys' Jersey","Boys' T-Shirt Dry-Fit","Boys' Tank Top","Boys' Hoodie","Boys' Training Top","Boys' Long Sleeve"],
      "Bottoms": ["Boys' Training Shorts","Boys' Tracksuit Bottoms","Boys' Compression Shorts","Boys' Jogger Pants"],
      "Sets": ["Boys' Tracksuit Set","Boys' Sports Kit Top+Shorts","Boys' Compression Set"],
      "Socks": ["Boys' Sports Socks","Boys' No-Show Socks"],
      "Headwear": ["Boys' Sports Cap","Boys' Beanie"]
    },
    "Girls' Apparel": {
      "Tops": ["Girls' Jersey","Girls' T-Shirt","Girls' Tank Top","Girls' Hoodie","Girls' Training Top","Girls' Sports Crop"],
      "Bottoms": ["Girls' Training Shorts","Girls' Leggings Full","Girls' Capri Leggings","Girls' Skort","Girls' Jogger Pants"],
      "Sets": ["Girls' Tracksuit Set","Girls' Kit Top+Shorts","Girls' Legging + Top Set"],
      "Sports Bras": ["Girls' Crop Bra Light","Girls' Training Bra"],
      "Socks": ["Girls' Sports Socks","Girls' No-Show Socks"],
      "Headwear": ["Girls' Sports Cap","Girls' Headband","Girls' Visor"]
    },
    "Unisex Apparel": {
      "Tops": ["Unisex Training T-Shirt","Unisex Hoodie","Unisex Rashguard","Unisex Baselayer"],
      "Bottoms": ["Unisex Training Shorts","Unisex Compression Shorts","Unisex Jogger Pants"],
      "Accessories": ["Unisex Headband","Unisex Wristband Set","Unisex Sports Gloves","Unisex Buff/Neck Gaiter"]
    }
  },

  "👟 Universal Sports Footwear": {
    "Running & Training": {
      "Running Shoes": ["Road Running Neutral Men's","Road Running Stability Men's","Road Running Women's","Junior Running Shoes","Carbon Plate Racing","Ultramarathon Shoes","Minimalist Barefoot","Max Cushion Running","Trail Running Shoes","Waterproof Trail Shoes"],
      "Training Shoes": ["Cross Training Shoes Men's","Cross Training Shoes Women's","HIIT Training Shoes","Gym Training Shoes","Weightlifting Shoes Raised Heel","Powerlifting Slippers","Plyometric Training Shoes"],
      "Walking Shoes": ["Walking Shoes Men's","Walking Shoes Women's","Nordic Walking Shoes","Racewalking Track Shoes"],
      "Recovery": ["Recovery Slides Men's","Recovery Slides Women's","Recovery Sandals","Pool Slides","Post-Match Flip-Flops"]
    },
    "Sport-Specific Shoes": {
      "Court Sports": ["Basketball High Top","Basketball Low Top","Volleyball Indoor","Badminton Non-Marking","Tennis Clay","Tennis Hard Court","Tennis All Court","Squash Non-Marking","Racquetball","Table Tennis Shoes","Netball Shoes"],
      "Field Sports": ["Football Boots FG","Football Boots AG","Football Boots SG","Football Boots Indoor","Cricket Spikes","Rugby Boots FG","Rugby Boots SG","Baseball Cleats Molded","Baseball Cleats Metal","Softball Cleats","Lacrosse Cleats","American Football Cleats"],
      "Cycling Shoes": ["Road Cycling 3-Bolt","MTB Clipless SPD","MTB Flat Pedal","Indoor Cycling","Triathlon Shoes"],
      "Combat Sports": ["Boxing Boots High","Boxing Boots Low","Wrestling High Top","Muay Thai Training Shoe","Karate Shoes","Judo Tabi Socks","Fencing Shoes"],
      "Water Shoes": ["Swim Racing Fin","Water Shoes Amphibious","Wetsuit Booties 3mm","Wetsuit Booties 5mm","Surf Booties","Kayak Neoprene Boots"],
      "Winter Shoes": ["Ski Boots Alpine","Snowboard Boots","Speed Skates","Figure Skates","Cross-Country Ski Boots","Ice Hockey Skates"],
      "Outdoor Shoes": ["Hiking Boot Low","Hiking Boot Mid","Climbing Shoe Beginner","Climbing Shoe Performance","Approach Shoe","Golf Shoe Spiked","Golf Shoe Spikeless"]
    }
  },

  "🎒 Universal Sports Accessories": {
    "Bags & Carriers": {
      "Team & Kit Bags": ["Large Wheelie Kitbag","Medium Duffle Kitbag","Backpack Sports 30L","Backpack Sports 45L","Sling Bag Sports","Mini Drawstring Bag","Mesh Training Bag","Waterproof Sports Bag"],
      "Specialist Bags": ["Boot Bag","Shoe Bag Single","Racquet Bag Multi","Bike Saddle Bag","Cycling Backpack","Swim Bag Mesh","Yoga Mat Bag","Ski Boot Bag","Snowboard Bag Travel","Golf Travel Bag"],
      "Packs": ["Hydration Pack Reservoir 2L","Trail Running Vest Pack","Cycling Hydration Pack","Tactical Sport Pack","Camera Outdoor Pack","Dry Bag 5L","Dry Bag 20L","Dry Bag 40L"]
    },
    "Hydration": {
      "Water Bottles": ["Sports Bottle BPA-Free 500ml","Sports Bottle 750ml","Sports Bottle 1L","Insulated Steel Bottle 500ml","Insulated Steel Bottle 750ml","Squeeze Bottle Sports","Soft Flask 250ml","Soft Flask 500ml","Cycling Bottle 600ml","Baby/Junior Sports Bottle 300ml"],
      "Hydration Systems": ["2L Hydration Reservoir","3L Hydration Reservoir","Hydration Hose Replacement","Bite Valve Replacement","Cleaning Kit Reservoir"],
      "Nutrition": ["Sports Gel Sachet","Energy Bar Sports","Electrolyte Tablets","Electrolyte Powder Sachet","Protein Shaker Bottle","Supplement Storage Container"]
    },
    "Support & Protection": {
      "Braces & Supports": ["Knee Sleeve Neoprene","Knee Brace Hinged","Ankle Brace Lace-Up","Ankle Sleeve Compression","Wrist Support Wrap","Wrist Brace Rigid","Elbow Sleeve","Elbow Brace Tennis","Thigh Compression Sleeve","Calf Compression Sleeve","Back Support Belt","Shoulder Support"],
      "Taping & Wraps": ["Athletic Tape 38mm","Athletic Tape 50mm","Kinesiology Tape Roll","Pre-Wrap Foam","Hand Wrap 4.5m","Gel Wrist Wrap","Finger Splint Tape","Blister Prevention Tape"],
      "Protective Eyewear": ["Sport Sunglasses Polarized","Sport Sunglasses Photochromic","Safety Racquet Goggles","Swimming Goggles","Ski/Snow Goggles","Cycling Glasses"],
      "Mouthguards": ["Standard Mouthguard","Boil & Bite Mouthguard","Custom Dual Mouthguard","Junior Mouthguard","Mouthguard Case"]
    },
    "Wearable Technology": {
      "Watches & Trackers": ["GPS Multisport Watch Entry","GPS Multisport Watch Advanced","GPS Running Watch","GPS Cycling Computer","Golf GPS Watch","Swim Performance Watch","Heart Rate Monitor Optical","Chest Strap HR Monitor","Activity Tracker Basic","Altitude & Barometer Watch"],
      "Performance Sensors": ["Running Footpod Speed","Cycling Power Meter Pedal","Swim Lap Counter Digital","Ball Speed Radar Gun","Smart Coaching Sensor","Sleep & Recovery Tracker"],
      "Smart Equipment": ["Smart Basketball Sensor","Smart Football Sensor","Smart Cricket Bat Sensor","Smart Bat Baseball","Smart Racquet Sensor","Smart Jump Rope Counter"]
    },
    "Recovery Tools": {
      "Foam & Rollers": ["Standard Foam Roller","Textured Deep Tissue Roller","Vibrating Foam Roller","Half Roller","Foam Roller Short Travel","Trigger Point Ball","Lacrosse Ball","Peanut Massage Ball"],
      "Massage Tools": ["Percussion Massage Gun","Mini Massage Gun","Massage Stick Roller","Thumb/Hand Massager","Foot Massage Roller","Electric Massage Belt"],
      "Compression & Cold": ["Compression Leg Sleeve","Compression Arm Sleeve","Ice Pack Reusable","Instant Cold Pack","Compression Boot Inflate","Cryotherapy Wrap Knee"],
      "Flexibility Tools": ["Stretch Multi-Loop Strap","PVC Stretching Strap","Yoga Strap Cotton","Stretching Mat Thick","Door Anchor Stretch","Mobility Stick/Rod"],
      "Treatment Products": ["Sports Ice Spray","Muscle Heat Spray","TENS/EMS Unit Compact","K-Tape Roll","Arnica Gel Sports","Magnesium Muscle Cream","Epsom Salt 2kg","Recovery Bath Bomb Sports"]
    },
    "General Accessories": {
      "Towels": ["Sports Towel Microfibre Large","Sports Towel Microfibre Small","Cool Towel Instant","Gym Towel Set","Beach Sports Towel","Wristband Sweat Towel"],
      "Headwear & Bands": ["Sweat Headband Wide","Sweat Headband Thin","Wristband Set Pair","Sports Beanie Thermal","Buff Multifunctional","Balaclava Sports","Skull Cap Running","Peak Cap Sports Mesh"],
      "Training Aids": ["Agility Ladder 10-Rung","Cone Set Mixed 20","Speed Parachute","Resistance Bands Loop Set 5","Resistance Tube Set 5","Balance Board","Balance Disc Pod","Reaction Ball","Skipping Rope Bearing","Weighted Vest Adjustable 10kg","Weighted Vest 20kg","Punch Mitts Pair","Focus Pads","Pull-Up Assist Band","Ab Wheel Dual","Parallettes Low Pair","Grip Strengthener Adjustable"],
      "Nutrition & Care": ["Sports Sunscreen SPF50 Face","Zinc Oxide Stick","Body Glide Anti-Chafe","Blister Plasters Sports","Sports First Aid Kit 20","Emergency Whistle","Compression Stocking Travel"]
    }
  }
};

/* ═══════════════════════════════════════════════════════════════
   BUILD TREE WITH IDS & STATS
   ═══════════════════════════════════════════════════════════════ */

let nodeCounter = 0;
function buildTree(obj, depth = 0) {
  return Object.entries(obj).map(([key, val]) => {
    const id = ++nodeCounter;
    if (Array.isArray(val)) {
      return {
        id, label: key, depth,
        children: val.map(item => ({ id: ++nodeCounter, label: item, depth: depth + 1, children: [] }))
      };
    } else {
      return { id, label: key, depth, children: buildTree(val, depth + 1) };
    }
  });
}

const TREE = buildTree(RAW_TAXONOMY);

function countAll(nodes) {
  let total = 0;
  nodes.forEach(n => {
    total++;
    if (n.children.length) total += countAll(n.children);
  });
  return total;
}
function countLeaves(nodes) {
  let leaves = 0;
  nodes.forEach(n => {
    if (n.children.length === 0) leaves++;
    else leaves += countLeaves(n.children);
  });
  return leaves;
}

const TOTAL_NODES = countAll(TREE);
const TOTAL_LEAVES = countLeaves(TREE);
const DEPT_COUNT = TREE.length;

/* ═══════════════════════════════════════════════════════════════
   SEARCH HELPER
   ═══════════════════════════════════════════════════════════════ */

function searchTree(nodes, query) {
  if (!query) return new Set();
  const q = query.toLowerCase();
  const matched = new Set();
  function walk(node) {
    let hit = node.label.toLowerCase().includes(q);
    if (node.children.length) {
      node.children.forEach(c => { if (walk(c)) hit = true; });
    }
    if (hit) matched.add(node.id);
    return hit;
  }
  nodes.forEach(walk);
  return matched;
}

/* ═══════════════════════════════════════════════════════════════
   DEPT COLOR MAP
   ═══════════════════════════════════════════════════════════════ */

const DEPT_COLORS = [
  "#f59e0b","#10b981","#3b82f6","#ef4444",
  "#a855f7","#06b6d4","#ec4899","#84cc16",
  "#f97316","#6366f1","#14b8a6","#e11d48","#8b5cf6"
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function TreeNode({ node, expanded, onToggle, searchMatched, query, deptColor }) {
  const isLeaf = node.children.length === 0;
  const isOpen = expanded.has(node.id);
  const isHit = searchMatched.size > 0 && searchMatched.has(node.id);
  const isDirectHit = query && node.label.toLowerCase().includes(query.toLowerCase());

  const indent = node.depth * 18;

  return (
    <div style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}>
      <div
        onClick={() => !isLeaf && onToggle(node.id)}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          paddingLeft: indent + 8, paddingRight: 8,
          paddingTop: 3, paddingBottom: 3,
          cursor: isLeaf ? "default" : "pointer",
          borderRadius: 4,
          background: isDirectHit ? "rgba(245,158,11,0.15)" : "transparent",
          borderLeft: isDirectHit ? "2px solid #f59e0b" : "2px solid transparent",
          transition: "background 0.15s"
        }}
        onMouseEnter={e => { if (!isDirectHit) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
        onMouseLeave={e => { if (!isDirectHit) e.currentTarget.style.background = "transparent"; }}
      >
        {/* expand icon */}
        {!isLeaf ? (
          <span style={{ color: deptColor || "#6b7280", fontSize: 10, width: 14, textAlign: "center", flexShrink: 0 }}>
            {isOpen ? "▼" : "▶"}
          </span>
        ) : (
          <span style={{ width: 14, flexShrink: 0 }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: deptColor ? deptColor + "60" : "#374151", marginLeft: 4 }} />
          </span>
        )}
        {/* label */}
        <span style={{
          fontSize: node.depth === 0 ? 13 : node.depth === 1 ? 12 : node.depth === 2 ? 11 : 10.5,
          fontWeight: node.depth === 0 ? 700 : node.depth === 1 ? 600 : node.depth === 2 ? 500 : 400,
          color: isDirectHit ? "#fbbf24" : node.depth === 0 ? "#f9fafb" : node.depth === 1 ? "#e5e7eb" : node.depth === 2 ? "#d1d5db" : "#9ca3af",
          letterSpacing: node.depth === 0 ? "0.5px" : 0
        }}>
          {node.label}
        </span>
        {/* child count badge */}
        {!isLeaf && node.depth < 2 && (
          <span style={{
            marginLeft: "auto", fontSize: 9, color: "#4b5563",
            background: "#1f2937", padding: "1px 5px", borderRadius: 3
          }}>
            {countLeaves(node.children)}
          </span>
        )}
      </div>
      {/* children */}
      {!isLeaf && isOpen && (
        <div>
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              expanded={expanded}
              onToggle={onToggle}
              searchMatched={searchMatched}
              query={query}
              deptColor={deptColor}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════════════════ */

export default function App() {
  const [expanded, setExpanded] = useState(new Set());
  const [query, setQuery] = useState("");

  const searchMatched = useMemo(() => searchTree(TREE, query), [query]);

  const toggleNode = useCallback((id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    const all = new Set();
    function walk(nodes) { nodes.forEach(n => { all.add(n.id); if (n.children.length) walk(n.children); }); }
    walk(TREE);
    setExpanded(all);
  }, []);

  const collapseAll = useCallback(() => setExpanded(new Set()), []);

  const expandSearch = useCallback(() => {
    if (searchMatched.size > 0) setExpanded(new Set(searchMatched));
  }, [searchMatched]);

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(RAW_TAXONOMY, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = "sports_taxonomy.json"; a.click();
  };

  const exportCSV = () => {
    const rows = ["Department,Sport/Activity,Category,Product Type"];
    function walkExport(nodes, path = []) {
      nodes.forEach(n => {
        if (n.children.length === 0) {
          const p = [...path, n.label];
          while (p.length < 4) p.unshift("");
          rows.push(p.slice(-4).map(v => `"${v.replace(/"/g, '""')}"`).join(","));
        } else {
          walkExport(n.children, [...path, n.label]);
        }
      });
    }
    walkExport(TREE);
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = "sports_taxonomy.csv"; a.click();
  };

  const visibleCount = query ? searchMatched.size : TOTAL_NODES;

  return (
    <div style={{
      background: "#080b0e", minHeight: "100vh", color: "#e5e7eb",
      fontFamily: "'JetBrains Mono', monospace", display: "flex", flexDirection: "column"
    }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0f1923 0%, #0a1628 100%)",
        borderBottom: "1px solid #1f2937", padding: "20px 24px",
        position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>🏆</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#f9fafb", letterSpacing: "1px", textTransform: "uppercase" }}>
                Sports & Outdoors Taxonomy
              </span>
              <span style={{ fontSize: 9, background: "#f59e0b", color: "#000", padding: "2px 6px", borderRadius: 2, fontWeight: 700, letterSpacing: "0.5px" }}>RETAIL CATALOG</span>
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 8, flexWrap: "wrap" }}>
              {[
                ["DEPARTMENTS", DEPT_COUNT],
                ["TOTAL NODES", TOTAL_NODES.toLocaleString()],
                ["PRODUCT SKUs", TOTAL_LEAVES.toLocaleString()],
                ["VISIBLE", visibleCount.toLocaleString()]
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 8, color: "#6b7280", letterSpacing: "1.5px" }}>{label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#f59e0b" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "flex-start" }}>
            {[
              ["EXPAND ALL", expandAll, "#1f2937"],
              ["COLLAPSE", collapseAll, "#1f2937"],
              ["EXPORT JSON", exportJSON, "#064e3b"],
              ["EXPORT CSV", exportCSV, "#1e3a5f"]
            ].map(([label, fn, bg]) => (
              <button key={label} onClick={fn} style={{
                background: bg, border: "1px solid #374151", color: "#d1d5db",
                fontSize: 10, padding: "6px 12px", borderRadius: 4, cursor: "pointer",
                fontFamily: "inherit", letterSpacing: "0.5px", fontWeight: 600,
                transition: "all 0.15s"
              }}
                onMouseEnter={e => e.target.style.borderColor = "#f59e0b"}
                onMouseLeave={e => e.target.style.borderColor = "#374151"}
              >{label}</button>
            ))}
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ marginTop: 14, position: "relative" }}>
          <input
            value={query}
            onChange={e => { setQuery(e.target.value); if (e.target.value) setTimeout(expandSearch, 50); }}
            placeholder="🔍  Search 5,000+ product categories across all sports..."
            style={{
              width: "100%", boxSizing: "border-box",
              background: "#0f1923", border: "1px solid #374151",
              color: "#e5e7eb", padding: "10px 14px", borderRadius: 6,
              fontSize: 11, fontFamily: "inherit", outline: "none",
              transition: "border 0.15s"
            }}
            onFocus={e => e.target.style.borderColor = "#f59e0b"}
            onBlur={e => e.target.style.borderColor = "#374151"}
          />
          {query && (
            <div style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              fontSize: 10, color: "#f59e0b"
            }}>
              {searchMatched.size} matches
            </div>
          )}
        </div>
      </div>

      {/* TREE */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 8px" }}>
        {TREE.map((deptNode, i) => {
          const color = DEPT_COLORS[i % DEPT_COLORS.length];
          const isVisible = !query || searchMatched.has(deptNode.id);
          if (!isVisible) return null;
          return (
            <div key={deptNode.id} style={{
              marginBottom: 6,
              border: `1px solid ${color}22`,
              borderRadius: 6,
              overflow: "hidden",
              background: "#0c1118"
            }}>
              {/* Department header */}
              <div
                onClick={() => toggleNode(deptNode.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 14px", cursor: "pointer",
                  background: `linear-gradient(90deg, ${color}18 0%, transparent 100%)`,
                  borderBottom: expanded.has(deptNode.id) ? `1px solid ${color}30` : "none",
                  transition: "background 0.15s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = `linear-gradient(90deg, ${color}28 0%, transparent 100%)`}
                onMouseLeave={e => e.currentTarget.style.background = `linear-gradient(90deg, ${color}18 0%, transparent 100%)`}
              >
                <span style={{ color, fontSize: 11 }}>{expanded.has(deptNode.id) ? "▼" : "▶"}</span>
                <span style={{ width: 3, height: 16, background: color, borderRadius: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#f9fafb", letterSpacing: "1px", textTransform: "uppercase" }}>
                  {deptNode.label}
                </span>
                <span style={{ marginLeft: "auto", fontSize: 10, color, fontWeight: 700 }}>
                  {countLeaves(deptNode.children).toLocaleString()} SKUs
                </span>
                <span style={{ fontSize: 10, color: "#6b7280" }}>
                  {deptNode.children.length} categories
                </span>
              </div>
              {/* Children */}
              {expanded.has(deptNode.id) && (
                <div style={{ padding: "4px 0 6px" }}>
                  {deptNode.children.map(child => (
                    <TreeNode
                      key={child.id}
                      node={child}
                      expanded={expanded}
                      onToggle={toggleNode}
                      searchMatched={searchMatched}
                      query={query}
                      deptColor={color}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div style={{
        borderTop: "1px solid #1f2937", padding: "8px 16px",
        display: "flex", justifyContent: "space-between", fontSize: 9,
        color: "#4b5563", letterSpacing: "0.5px"
      }}>
        <span>SPORTS & OUTDOORS ECOMMERCE TAXONOMY v1.0 — SUITABLE FOR SHOPIFY, MAGENTO, WOOCOMMERCE, AKENEO, PIMCORE</span>
        <span>{TOTAL_LEAVES.toLocaleString()} LEAF NODES ACROSS {DEPT_COUNT} DEPARTMENTS</span>
      </div>
    </div>
  );
}
