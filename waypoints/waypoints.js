var WAYPOINTS = {"Brazil": {"average": [-19.913200902335443, -48.14668639419669], "size": 942}, "Afghanistan": {"average": [34.42131666666666, 68.31125], "size": 4}, "Italy": {"average": [44.86962740041933, 10.864724884696011], "size": 1590}, "Czech Republic": {"average": [49.73126749435668, 15.548871858540236], "size": 886}, "Canada": {"average": [48.03820790986085, -93.23583315184518], "size": 1102}, "Sudan": {"average": [12.660174999999999, 31.0978125], "size": 8}, "India": {"average": [18.80184129729726, 74.58746154054047], "size": 1850}, "Hungary": {"average": [47.25666328502412, 19.79652817725753], "size": 1794}, "Lithuania": {"average": [55.14537389486261, 23.911459139784945], "size": 279}, "Luxembourg": {"average": [49.81480500000001, 6.089888333333333], "size": 10}, "France": {"average": [46.3410272864617, 2.7730929582135806], "size": 4523}, "Syrian Arab Republic": {"average": [35.31120000000001, 38.22824444444445], "size": 6}, "Slovakia": {"average": [48.76736215498937, 18.78691852441613], "size": 314}, "Bosnia And Herzegovina": {"average": [44.28527777777778, 17.630587037037035], "size": 9}, "Ireland": {"average": [53.5253517473118, -7.397113306451614], "size": 124}, "Mongolia": {"average": [46.34848333333333, 101.17772575757576], "size": 11}, "Argentina": {"average": [-34.97505141393903, -63.10001541972845], "size": 1497}, "Bolivia": {"average": [-16.56150135135135, -64.7072828828829], "size": 37}, "Norway": {"average": [61.61893749187786, 9.407905133203368], "size": 513}, "Malawi": {"average": [-13.186609999999998, 34.14886166666667], "size": 10}, "United Kingdom": {"average": [53.399791077931596, -1.9692850327749438], "size": 1373}, "Israel": {"average": [31.75737, 35.01877888888888], "size": 15}, "Australia": {"average": [-30.333250545028545, 142.08050893948663], "size": 3272}, "Iran": {"average": [35.628238888888895, 51.09657222222222], "size": 3}, "Algeria": {"average": [36.153829629629634, 3.112009259259259], "size": 9}, "Turkey": {"average": [39.178718151815175, 32.17929653465346], "size": 101}, "Zambia": {"average": [-13.11311923076923, 29.125769230769233], "size": 13}, "Slovenia": {"average": [46.169514384509, 14.676107399723364], "size": 241}, "Zimbabwe": {"average": [-19.062044047619047, 29.886170238095236], "size": 14}, "China": {"average": [32.79063765432099, 108.09318919753085], "size": 54}, "Chile": {"average": [-35.84508058375637, -71.59932038917093], "size": 394}, "Denmark": {"average": [55.81108189938892, 10.279611589092621], "size": 709}, "Belgium": {"average": [50.6167931098696, 4.794022718808196], "size": 358}, "Thailand": {"average": [10.387038888888888, 99.35240555555555], "size": 3}, "Dominican Republic": {"average": [18.901448809523806, -70.25694523809526], "size": 14}, "Germany": {"average": [50.71293219061324, 10.27622223642853], "size": 6257}, "Spain": {"average": [40.39345349239281, -2.8251627593360995], "size": 1446}, "Netherlands": {"average": [51.9975076851852, 5.7188994444444425], "size": 360}, "Estonia": {"average": [58.658109999999986, 24.98491], "size": 15}, "Oman": {"average": [25.290975, 55.44028333333333], "size": 2}, "Poland": {"average": [51.733935543893125, 19.01021000318067], "size": 1048}, "Indonesia": {"average": [-6.431022222222222, 107.04120555555555], "size": 3}, "Macedonia": {"average": [41.57069166666666, 21.181941666666667], "size": 2}, "Moldova": {"average": [47.3832, 28.356524999999998], "size": 2}, "United States": {"average": [38.38362635060109, -94.88874127900293], "size": 17412}, "Morocco": {"average": [31.51441590621037, -6.151724651457546], "size": 263}, "Liechtenstein": {"average": [34.095549999999996, 35.82536666666667], "size": 3}, "Latvia": {"average": [56.91111333333333, 22.872893333333334], "size": 5}, "Namibia": {"average": [-23.47763206429779, 17.675059560067677], "size": 197}, "Malta": {"average": [35.8575, 14.4775], "size": 1}, "Finland": {"average": [62.345804194260566, 25.087628090507735], "size": 302}, "Japan": {"average": [39.353786742424205, 140.1477882102273], "size": 352}, "Switzerland": {"average": [46.803441977822985, 8.275304265670965], "size": 1473}, "New Zealand": {"average": [-41.029763179289695, 172.70203005990578], "size": 779}, "Libyan Arab Jamabiriya": {"average": [31.757840740740747, 17.467685185185182], "size": 9}, "Bulgaria": {"average": [43.038218238993714, 25.634319496855344], "size": 53}, "Pakistan": {"average": [24.908616666666667, 67.16278333333334], "size": 1}, "Romania": {"average": [45.650022435897434, 25.102896153846157], "size": 26}, "Iraq": {"average": [30.549166666666668, 47.662216666666666], "size": 1}, "Myanmar": {"average": [20.141237179487177, 95.3442935897436], "size": 13}, "Portugal": {"average": [39.1006652363184, -8.728416355721391], "size": 268}, "Mexico": {"average": [22.453875686274515, -100.88021235294116], "size": 85}, "Egypt": {"average": [28.651973684210528, 31.85274736842105], "size": 19}, "South Africa": {"average": [-29.009548613493408, 25.462184591194955], "size": 1166}, "Serbia": {"average": [43.55163125, 20.42024375], "size": 8}, "Sweden": {"average": [59.24511600938958, 15.198414589201851], "size": 1420}, "Russian Federation": {"average": [51.212919362745104, 48.85649724264707], "size": 272}, "Botswana": {"average": [-21.680064102564106, 24.952434615384618], "size": 13}, "Uzbekistan": {"average": [39.635001111111116, 64.72113], "size": 15}, "Malaysia": {"average": [2.9370833333333333, 101.62235833333332], "size": 2}, "Austria": {"average": [47.44503462889766, 13.623919631093571], "size": 1518}, "Mozambique": {"average": [-18.074590476190476, 36.146123809523814], "size": 21}, "Tunisia": {"average": [34.99759074074074, 9.717655555555556], "size": 9}, "Greece": {"average": [38.95300743589744, 23.04626512820513], "size": 195}, "Sri Lanka": {"average": [7.5091256410256415, 80.66592179487179], "size": 13}, "Croatia": {"average": [45.289736894586895, 17.104790883190887], "size": 117}, "Niger": {"average": [27.79215, 85.29048750000001], "size": 4}, "Cyprus": {"average": [34.72953888888889, 33.03426111111111], "size": 3}, "Albania": {"average": [41.65485833333334, 19.659441666666666], "size": 2}}