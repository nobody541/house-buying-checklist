/**
 * DEFAULT CHECKLIST FOR FIRST-TIME HOUSE BUYERS
 *
 * Edit this file to modify the default checklist items.
 * Each category has a name and an array of items.
 * When a new user registers, this data is copied into their
 * personal checklist in the database.
 *
 * Item shape: { title: string }
 * The server adds `checked: false` and `notes: ""` automatically.
 */

const defaultChecklist = [
  {
    category: 'Financial Preparation',
    items: [
      { title: 'Check your credit score and review your credit report for errors' },
      { title: 'Pay down existing debts to improve debt-to-income ratio' },
      { title: 'Save for a down payment (aim for at least 3-20% of home price)' },
      { title: 'Build an emergency fund (3-6 months of expenses beyond down payment)' },
      { title: 'Budget for closing costs (typically 2-5% of purchase price)' },
      { title: 'Avoid opening new credit accounts or making large purchases' },
      { title: 'Gather financial documents: tax returns, W-2s, pay stubs, bank statements' },
      { title: 'Research first-time buyer assistance programs in your state/city' },
      { title: 'Calculate how much house you can realistically afford' },
      { title: 'Consider additional costs: property tax, insurance, HOA, maintenance' },
    ],
  },
  {
    category: 'Mortgage Process',
    items: [
      { title: 'Research mortgage types: conventional, FHA, VA, USDA' },
      { title: 'Understand fixed-rate vs. adjustable-rate mortgages' },
      { title: 'Get pre-approved (not just pre-qualified) by a lender' },
      { title: 'Compare rates and terms from at least 3 different lenders' },
      { title: 'Ask about points, origination fees, and total loan costs' },
      { title: 'Understand PMI (Private Mortgage Insurance) if putting less than 20% down' },
      { title: 'Lock in your interest rate at the right time' },
      { title: 'Prepare all required documents: ID, income verification, asset statements' },
      { title: 'Understand the difference between pre-approval amount and what you should spend' },
      { title: 'Ask lender about estimated monthly payment including taxes and insurance' },
    ],
  },
  {
    category: 'House Hunting',
    items: [
      { title: 'Define must-haves vs. nice-to-haves (bedrooms, bathrooms, garage, yard)' },
      { title: 'Research neighborhoods: schools, crime rates, commute times, amenities' },
      { title: "Hire a buyer's real estate agent" },
      { title: 'Set up alerts on real estate websites (Zillow, Redfin, Realtor.com)' },
      { title: 'Drive through target neighborhoods at different times of day' },
      { title: 'Check flood zones, natural disaster risks, and environmental hazards' },
      { title: 'Research property tax rates in target areas' },
      { title: 'Consider future development plans in the area' },
      { title: 'Evaluate proximity to work, grocery stores, hospitals, public transit' },
      { title: 'Attend open houses to get a feel for the market' },
    ],
  },
  {
    category: 'House Viewing Checklist',
    items: [
      { title: 'Exterior: Check foundation for cracks or settling' },
      { title: 'Exterior: Inspect roof condition (missing shingles, sagging, age)' },
      { title: 'Exterior: Look at siding, gutters, and downspouts' },
      { title: 'Exterior: Check grading — ground should slope away from foundation' },
      { title: 'Exterior: Inspect driveway and walkways for cracks' },
      { title: 'Interior: Test all light switches and electrical outlets' },
      { title: 'Interior: Run all faucets and flush toilets to check water pressure and drainage' },
      { title: 'Interior: Look for water stains on ceilings and walls' },
      { title: 'Interior: Check for signs of mold or mildew, especially in basement and bathrooms' },
      { title: 'Interior: Open and close all windows and doors (check for sticking)' },
      { title: 'Interior: Inspect floors for levelness, squeaks, or damage' },
      { title: 'Interior: Check closet and storage space' },
      { title: 'Systems: Ask about age and condition of HVAC system' },
      { title: 'Systems: Check water heater age and capacity' },
      { title: 'Systems: Look at the electrical panel (sufficient amperage, no knob-and-tube)' },
      { title: 'Systems: Ask about plumbing material (copper, PEX, galvanized, polybutylene)' },
      { title: 'General: Note overall smell (musty could mean moisture problems)' },
      { title: 'General: Check cell phone reception throughout the house' },
      { title: 'General: Take photos and notes at every viewing' },
    ],
  },
  {
    category: 'Home Inspection',
    items: [
      { title: 'Hire a licensed, reputable home inspector' },
      { title: 'Attend the inspection in person' },
      { title: 'Inspector checks: structural integrity (foundation, framing, load-bearing walls)' },
      { title: 'Inspector checks: roof condition and estimated remaining life' },
      { title: 'Inspector checks: plumbing system (pipes, water heater, water pressure, sewer line)' },
      { title: 'Inspector checks: electrical system (panel, wiring, GFCI outlets, grounding)' },
      { title: 'Inspector checks: HVAC system (furnace, AC, ductwork, thermostat)' },
      { title: 'Inspector checks: insulation and ventilation in attic' },
      { title: 'Inspector checks: windows, doors, and weatherproofing' },
      { title: 'Inspector checks: basement/crawlspace for moisture, cracks, radon' },
      { title: 'Red flags: evidence of pest infestation (termites, rodents)' },
      { title: 'Red flags: DIY electrical or plumbing work (not up to code)' },
      { title: 'Red flags: fresh paint in isolated spots (possibly hiding damage)' },
      { title: "Red flags: doors that won't close properly (foundation shift)" },
      { title: 'Consider additional inspections: radon, mold, sewer scope, pest' },
      { title: 'Review the full inspection report carefully before proceeding' },
      { title: 'Get repair estimates for any significant issues found' },
    ],
  },
  {
    category: 'Making an Offer',
    items: [
      { title: 'Research comparable sales (comps) in the area' },
      { title: "Determine your offer price with your agent's guidance" },
      { title: 'Include an earnest money deposit (typically 1-3% of offer price)' },
      { title: 'Include inspection contingency' },
      { title: 'Include financing contingency' },
      { title: 'Include appraisal contingency' },
      { title: 'Set a reasonable closing date' },
      { title: 'Request seller disclosures about known issues' },
      { title: 'Negotiate repairs or credits based on inspection findings' },
      { title: 'Get the final purchase agreement reviewed before signing' },
      { title: 'Understand what happens if contingencies are not met' },
    ],
  },
  {
    category: 'Closing Process',
    items: [
      { title: 'Order a home appraisal (usually arranged by lender)' },
      { title: 'Title search: ensure the property has a clear title' },
      { title: "Purchase title insurance (owner's and lender's policies)" },
      { title: 'Secure homeowner\'s insurance before closing' },
      { title: 'Review the Closing Disclosure form (compare with Loan Estimate)' },
      { title: 'Conduct a final walkthrough of the property 24-48 hours before closing' },
      { title: 'Verify all agreed-upon repairs have been completed' },
      { title: 'Prepare a cashier\'s check or wire transfer for closing costs' },
      { title: 'Bring valid ID and any required documents to closing' },
      { title: 'Review and sign all closing documents carefully' },
      { title: 'Receive the keys and copies of all signed documents' },
      { title: 'Confirm the deed is recorded with the county' },
    ],
  },
  {
    category: 'Post-Purchase',
    items: [
      { title: 'Set up utilities: electricity, gas, water, sewer, trash' },
      { title: 'Set up internet and phone service' },
      { title: 'File change of address with USPS' },
      { title: 'Update address: bank, credit cards, employer, insurance, subscriptions' },
      { title: 'Change the locks on all exterior doors' },
      { title: 'Test and replace batteries in smoke and CO detectors' },
      { title: 'Locate the main water shut-off valve and electrical panel' },
      { title: 'Schedule HVAC maintenance and change filters' },
      { title: 'Create a home maintenance schedule (seasonal tasks)' },
      { title: 'Keep all home-related documents organized (warranty, insurance, inspection report)' },
      { title: 'Introduce yourself to neighbors' },
      { title: 'File for homestead exemption if applicable in your area' },
    ],
  },
];

module.exports = defaultChecklist;
