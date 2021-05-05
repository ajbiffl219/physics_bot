const experiment_tags = 'scien, method, experiment, data, stats, statistic, '
const math_tags = 'scalar, vector, tensor, matrix, math, quantity, quantities, measur, calc, '
const uncertain_tags = 'certain, sure, error, precise, precision, accurate, accuracy, '

const light_tags = 'photo, light, ray, optic, radiat, radiant, '
const xray_tags = 'x ray, xray, x-ray, '.concat(light_tags)

const space_tags = 'space, astro, celestial, sky, '
const spacobs_tags = 'telescope, observ, '.concat(light_tags).concat(space_tags)
const planet_tags = 'planet, '.concat(space_tags)
const star_tags = 'star, stellar, '.concat(space_tags)
const redgiant_tags = 'red, giant, '.concat(star_tags)
const bluegiant_tags = 'blue, giant, '.concat(star_tags)
const blackhole_tags = 'black, hole, blackhole, singularit, event horizon, '.concat(space_tags)
const galaxy_tags = 'galaxy, galactic, '.concat(space_tags)
const solar_system_tags = 'solar, system, '.concat(space_tags)
const sun_tags = 'sun, solar, helio, '.concat(star_tags)
const earth_tags = 'earth, geo, solar, terrestrial, terra, '.concat(planet_tags)
const milky_way_tags = 'spiral, milky way, '.concat(galaxy_tags)
const sagittarius_tags = 'sagittar, sagitar, saggitar, saggittar, '
const whitedwarf_tags = 'white, dwarf, remnant, cold, cool, '.concat(star_tags)
const neutronstar_tags = 'neutron, collapse, dens, remnant, '.concat(star_tags)

const ocean_tags = 'sea, ocean, atlantic, pacific, indian, arctic, atlantis, '

const GR_tags = 'einstein, relativ, general, gravit, '
const manifold_tags = 'space, time, manifold, 4d, curv, flat, smooth, continuous, '
const metric_tags = 'metric, tensor, metrictensor, '.concat(GR_tags)
const geodesic_tags = 'geodesic, curv, free fall, '.concat(GR_tags)

const quantum_tags = 'quanta, quanti, quantu, '
const uncertan_tags = 'uncertain, heisenberg, '
const wavefunc_tags = 'eigenstate, wave function, wavefunction, schrodinger, wave equation, schr\xF6dinger, '
const waveparticle_tags = 'wave, particle, duality, '.concat(quantum_tags).concat(uncertan_tags).concat(wavefunc_tags)

const atom_tags = 'particle, atom, barion, element, matter, electron, '
const nucleus_tags = 'nucleus, nuclei, nuclear, nuclide, proton, neutron, barion, '
const ion_tags = 'ion, charge, '.concat(atom_tags)
const periodictable_tags = 'periodic, table, element, atom, barion, matter, '


const supernova_tags = 'nova, super, fusion, explosion, explod, '.concat(star_tags).concat(nucleus_tags)


const watt_soundalikes = 'watt, wat, wut, whut, what, '
const joule_soundalikes = 'joule, jewel, '


const field_tags = 'field, vector, '
const efield_tags = 'electr, charge, current, coulomb, gauss, '.concat(field_tags)
const epot_tags = 'electr, charge, potential, pot, energy, volt, '
const bfield_tags = 'magnet, current, curl, tesla, maxwell, ampere, gauss '.concat(field_tags)
const EM_tags = 'magnet, current, curl, electr, charge, potential, pot, energy, volt, coulomb, tesla, maxwell, ampere, gauss, '.concat(field_tags).concat(light_tags)
const ferromag_tags = 'ferro, iron, '.concat(bfield_tags)
const paramag_tags = 'paramagn, negative temperature'.concat(bfield_tags)
const diamag_tags = 'diamagn, '.concat(bfield_tags)



var factoids = {

    'All measurable quantities are either scalars, vectors, or tensors.' : 'nature, '.concat(math_tags),

    'The entire universe is just tensor calculus.' : 'universe, tensor, calculus, ',

    'Schr\xF6dinger\'s cat, the famous dead-and-alive cat in a box so often used to explain the principle of superposition, was originally stated by Erwin Schr\xF6dinger as an attempt to refute quantum mechanics for being so ridiculous.' : 'cat, collapse, superposition, '.concat(wavefunc_tags).concat(quantum_tags),

    'On a 1-to-10-billion scale, the Sun is the size of a grapefruit and the Earth is the size of the tip of a ballpoint pen 15 meters away.' : 'scale, space, earth, sun, astro, ',

    'On a 1-to-10-billion scale, the Sun is the size of a grapefruit and the Earth is the size of the tip of a ballpoint pen 15 meters away. Alpha Centauri, our closest stellar neighbor, is 2,500 miles away.' : 'scale, space, earth, sun, astro, centauri, centaurus, star, stellar, ',

    'On a 1-to-10-billion scale, the Sun is the size of a grapefruit and the Earth is the size of the tip of a ballpoint pen 15 meters away. Alpha Centauri, our closest stellar neighbor, is 2,500 miles away. The Milky Way galaxy stretches all the way to the real Sun.' : 'scale, space, earth, sun, astro, centauri, centaurus, star, stellar, milky way, galaxy, ',

    'Fun Fact: the curvature of spacetime causes real shapes and objects to deviate from the standard laws of geometry. In reality, triangles\' interior angles sum to greater than 180 degrees, circles\' circumferences are smaller than 2π times their radius, and spheres have volumes smaller than (4/3)πR\u00B3' : 'curv, space, time, geometry, euclid, fun fact, manifold, ',

    'A spacetime with positive curvature everywhere is CLOSED - moving in a single direction for long enough will return you to your starting place.' : 'curv, space, time, geometry, positive, geodesic, ',

    'Local flatness is a property of all continuous, smooth, manifolds and surfaces. It just means that close enough to the manifold, any curvature is negligible and objects in the space (and the space itself) follow the laws of Euclidean geometry.' : 'local, '.concat(manifold_tags),

    'In general, a \'dynamic\' system is used to denote a system that changes in time.' : 'dynamic, system, time, change, evolution, evolve, ',

    'Fun Fact: a food calorie is the energy required to raise the temperature of one liter of water by one degree Celsius' : 'calorie, unit, energy, temperature, water, liter, ',

    'An electron volt [eV] is the energy an electron acquires as it moves through a voltage increase of one volt.' : 'electron, volt, energy, unit, ',

    'The Watt [W] is the SI unit of power, equal to one Joule per second.' : 'power, unit,  SI , '.concat(watt_soundalikes),

    '\"Power\" is a unit that measures energy per unit time, with SI units of Watts [W], equal to one joule per second.' : 'power, SI, '.concat(watt_soundalikes),

    'Everything is a wave sometimes.' : ''.concat(waveparticle_tags),

    'Everything is a particle sometimes.' : ''.concat(waveparticle_tags),

    '\"Gauge transformations\" are reflections of the fact that many abstract, mathematical constructs used to connect different physical quantities are ambiguous, and completely different combinations of values (that are gauge transformations of each other) can yield the same results and the same predictions.' : 'gauge, transform, predict, ',

    'Electric potential and magnetic vector potential are collectively a gauge-dependent system, meaning one can be changed arbitrarily without the predicted electric and magnetic fields changing, so long as the other is changed in concord.' : 'gauge, transform, electric, magnet, potential, vector, ',

    'Gauge freedom of the electric and magnetic potentials is because of mathematical properties of a \"rate of change,\" while the gauge freedom of the metric tensor in general relativity is a reflection of the connection between arbitrary coordinates and very real curvature.' : 'gauge, transform, electric, magnetic, potential, metric, curv, coord, ',

    'Many planetary properties can be determined more or less directly from observations, including orbit parameters, mass and mass distribution, size, rotation rate and direction, shape, temperature, magnetic field, and the structure and composition of its atmosphere and surface.' : 'measure, param, orbit, mass, size, rotat, shape, temperature, magnetic, field, composition, atmo, surface, '.concat(spacobs_tags).concat(planet_tags),

    'The formation of atomic nuclei is known as \"nucleosynthesis.\"' : 'nucleosynthesis, fusion, '.concat(atom_tags).concat(nucleus_tags),

    'Einstein\'s most famous equation, E = mc\u00B2, gives an easy way to calculate the energy released during the most common form of hydrogen fusion, the pp-chain. Subtract the mass of one helium-4 nucleus from the mass of four protons, and multiply by the speed of light squared!' : 'einstein, energy, fusion, pp, chain, hydrogen, helium, fusion, equation, '.concat(nucleus_tags),

    'Absolute magnitude is the apparent magnitude of an object as viewed from a distance of 10 parsecs.' : 'absolute, magnitude, unit, measure, '.concat(spacobs_tags),

    'A force field is conservative when the work done on a mass moving between two points in the field is independent of the particular path taken between those two paths - when this is the case, the force is non-dissipative, and energy (and entropy) is conserved.' : 'conserv, energy, force, field, path, ',

    'A force field can either be conservative, so that energy is conserved, or dissipative, so that energy is lost to the surroundings in the form of heat.' : 'conserv, dissipat, force, field, energy, ',

    'Uncertainty is a fundamental part of nature - no measurement is ever 100% precise.' : 'uncertain, precis, measur, heisenberg, ',

    'The \"metric tensor\" is the description of spacetime. Knowing the components ' : 'space, time, '.concat(GR_tags).concat(metric_tags),

    'The Heisenberg uncertainty relation is partially responsible for the fact that you can never cool something down to eactly absolute zero.': 'uncertain, precis, measur, heisenberg, ',

    'Potential energy is for the most part one of those things, like position, where no matter what \"zero\" is said to be, it behaves exactly the same.' : 'potential, energy, zero-point, ', 

    'Potential energy is for the most part one of those things, like position, where no matter what \"zero\" is said to be, it behaves exactly the same. That said, traditionally, \"zero\" energy is the state of being at rest an infinite distance from everything else. In a formulation where this is the case, the potential field is said to be properly \"normalized.\"' : 'potential, energy, zero-point, normaliz, ',

    'Potential energy is for the most part one of those things, like position, where no matter what \"zero\" is said to be, it behaves exactly the same. The one exception is in general relativity, where the absolute value of energy (including normally inconsequential things like relativistic mass energy) is fundamnetally tied to the curvature of spacetime.' : 'potential, energy, zero-point, '.concat(GR_tags),

    'Repulsive potential energy is positive, while attractive potential energy is negative. The phrase \"potential well\" captures this idea, as particles moving toward the source of an attractive potential can be considered to analagously be \"falling into a well.\"' : 'potential, energy, well, ',

    'The virial theorem states roughly that a bound system\'s negative gravitational potential energy is double its kinetic energy.' : 'virial, potential, kinetic, energy, bound, gravit, ',

    'When the Sun becomes a red giant, the Earth will be engulfed, and a new habitable zone will form between 49.4 and 71.4 AU, within the bounds of the Kuiper Belt.': 'red, giant, habitable, kuiper, '.concat(sun_tags),

    'The smallest mass a star can have is often referred to as the \"hydrogen burning limit,\" equal to about 0.08 solar masses. Below this limit, the pressure of overlaying material on the core is too small to sustain the temperatures and densities required to sustain thermonuclear fusion.' : 'hydrogen, burning, limit, hydrogen burning limit, mass, pressure, core, thermonuclear, nuclear, fusion, '.concat(star_tags), 

    'Upon \"burning\" the last of its hydrogen fuel in some 7.59 billion years, the Sun will begin to collapse, increasing the pressure in its core and igniting helium fusion. It will re-expand under the pressure of this new fusion fuel, increasing in size by around 256 times (and engulfing Mercury, Venus, and the Earth in the process), and will become a \"red giant.\"' : 'red, giant, collapse, expand, '.concat(sun_tags),

    'Upon \"burning\" the last of its hydrogen fuel in some 7.59 billion years, the Sun will begin to collapse, increasing the pressure in its core and igniting helium fusion. Because helium fusion is less efficient than hydrogen, the average energy of light that it releases will decrease - its emission spectrum will shift toward the red, and it will become a \"red giant.\"' : 'red, giant, collapse, helium, fusion, fuel, '.concat(sun_tags),

    'The Sun, after expending all of its helium fuel as a red giant, will collapse into a white dwarf of only about 60% of its original mass (and less than 0.000001% of its volume). The white dwarf will cool until it is spent, and all that remains will be a cold, dark, stellar remnant called a \"black dwarf,\" approximately the size of the Earth.' : 'black, white, dwarf, remnant, helium, fusion, fuel, '.concat(sun_tags),

    'The constellation Orion\'s northeast shoulder is the red giant Betelgeuse - Orion\'s southwest leg is the blue supergiant Rigel. On exceptionally clear nights, the difference in their colors is visible to the naked eye.' : 'betelgeuse, rigel, beetlejuice, orion, constellation, night sky, '.concat(spacobs_tags).concat(redgiant_tags).concat(bluegiant_tags),

    'The red giant star Betelgeuse, Orion\'s northeast shoulder, has a surface temperature of about 3400 Kelvin.' : 'betelgeuse, orion, constellation, night sky, '.concat(spacobs_tags).concat(redgiant_tags),

    'The blue supergiant Rigel, the southeast leg of the constellation Orion, has a surface temperature of 10,100 Kelvin.' : 'rigel, orion, constellation, night sky, '.concat(spacobs_tags).concat(bluegiant_tags),

    'The Earth\'s axis wobbles between tilts of 22.1 and 24.5 degrees on a period of about 40,000 years - so in the year 22,021, the North Star won\'t really be the North star anymore. This wobble is called precession.' : 'precession, polaris, north, north star, earth, wobble, axis, axial, tilt, '.concat(spacobs_tags),

    'The Alpha Centauri star system is the Sun\'s closest stellar neighbor, coming in at around 4.236 light years distant.' : 'alpha, centauri, neighbor, proxima, '.concat(star_tags),

    'The Alpha Centauri star system is actually composed of three individual stars orbiting their mutual center of mass, along with an assortment of planets and smaller bodies.' : 'alpha, centauri, neighbor, proxima, tertiary, binary, '.concat(star_tags),

    'If the Earth\'s orbit around the Sun was represented as a dime, Proxima Centauri (our closest stellar neighbor) would be a mile and a half away.' : 'alpha, centauri, neighbor, proxima, scale, '.concat(star_tags),

    'The x-ray source Cygnus X-1, the brightest x-ray source in the Cygnus constellation, was the first object widely accepted to be a black hole.' : 'cygnus, constellation, '.concat(blackhole_tags).concat(xray_tags),

    'Sagittarius A* is the brightest x-ray source in the Sagittarius constellation, generally thought to be a supermassive black hole resting at the core of our galaxy.' : 'supermassive, constellation, '.concat(blackhole_tags).concat(xray_tags).concat(sagittarius_tags), 

    'Stars of at least 0.6 solar masses will turn into red giants after the main sequence, where the predominant source of energy in their core is helium fusion into carbon and oxygen.' : 'helium, carbon, oxygen, '.concat(redgiant_tags),

    'In very large stars, fusion continues until iron is produced in the core, at which point no more energy can be released by nuclear fusion. The star collapses rapidly, and the resulting spike in pressure causes a supersized nuclear explosion - a  supernova.' : 'collapse, pressure, spike, iron, '.concat(supernova_tags),

    'The heaviest elements (any atomic nuclei larger than iron-56) can only be formed in supernovae' : 'iron, heavy, heavi, isotope, '.concat(supernova_tags),

    '\"Stellar remnants\" are objects such as white dwarfs and neutron stars that have exhausted their nuclear fuel supply.' : 'fuel, nuclear, '.concat(whitedwarf_tags).concat(neutronstar_tags),

    '\"Remanent\" magnetism is a term used to describe the \"fingerprint\" left by external magnetic fields on ferromagnetic material. Remanent magnetism in seafloor rocks is how we know that the Earth\'s magnetic field periodically switches polarity.' : 'remnant, remanent, history, earth, '.concat(ferromag_tags),

    'Stellar remnants may indeed still have nuclear fusion taking place in their cores, but if their weight is not supported by that fusion, they are no longer considered stars.' : 'remnant, fusion, weight, pressure, isostatic, hydrostatic, equilibrium, equilibriate, '.concat(star_tags),

    'Stars on the main sequence maintain incredibly stable temperatures through their lifetimes, owing to the high temperature- and density-dependence of fusion rates. If the core heats up too much, it expands, slowing nuclear fusion and cooling it back down. On the other hand, if the core cools too much it contracts, making fusion occur more quickly, and it warms back up.' : 'fusion, equilibrium, equilibriate, temp, density, dense, stable, main sequence, '.concat(star_tags),

    'A neutron star is kept from gravitational collapse by \"neutron degeneracy pressure\" - Pauli\'s exclusion principle as applied to the particle we all know and love, the neutron.' : 'collapse, pressure, degenera, pauli, exclusion, '.concat(neutronstar_tags),

    'Generally, the strongest tidal forces in the Solar System are those of planets on their closest satellites. Tidal forces around the giant planets are so large that material closer to them was prevented entirely from coalescing into moons, instead forming the rings found around each of them.' : 'tide, tidal, force, gas, giant, ring, moon, coalesc, satellite, '.concat(planet_tags),

    'In 1792, English maker of fine porcelain Thomas Wedgewood noticed that all of his ovens began to glow red-hot at the same temperature, independent of their sizes and shapes. This was the first documented notice of the connection between color and temperature, which led to the discoveries of thermal radiation, blackbodies, and eventually, to quantum mechanics.' : 'blackbody, radiation, discover, observ, oven, red-hot, red hot, redhot, '.concat(quantum_tags),

    'Fun Fact: If you throw a tennis ball against a wall for all eternity, eventually the ball will phase right through the wall and continue out the other side.' : 'tunnel, phase, '.concat(waveparticle_tags),

    'Liouville\'s theorem in classical dynamics expresses the fact that a system in equilibrium is equally likely to be found in any one of its accessible microstates.' : 'thermo, equilibrium, accessible, microstate, ',

    'In thermodynamics, an \"adiabatic\" process is one in which no heat is transferred into or out of the system. Adiabatic processes have zero change in entropy, and are therefore completely reversible.' : 'adiabat, thermo, reversible, entropy, heat, ',

    'There are three predominant modes of heat transfer: conduction, convection, and radiation.' : 'heat, transfer, energy, conduct, convect, radiat, ',

    'Heisenberg\'s uncertainty principle is an expression of the fact that the packets of energy we call particles never have precise positions or momenta - they\'re spread out, as waves, even when they look like particles.' : 'position, momentum, location, velocity, speed, precise, unknowable, wave, particle, duality, heisenberg, local, nonlocal, diffuse, spread, '.concat(uncertain_tags),

    'There are almost as many types of density as there are other units: mass density, charge density, energy density, number density, all of them some unit divided by the amount of space it occupies.' : 'density, dense, unit, '

};
module.exports = {factoids}; 
