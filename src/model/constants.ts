import { Constant } from '@/model/constant'

const CONSTANTS: Constant[] = [
  { id: 109, name: 'AREA_CIRCLE_1', value: '3', type: 1, category: 9, deprecated: false, replacement: null },                     { id: 110, name: 'AREA_CIRCLE_2', value: '4', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 111, name: 'AREA_CIRCLE_3', value: '5', type: 1, category: 9, deprecated: false, replacement: null },                     { id: 253, name: 'AREA_FIRST_INLINE', value: '13', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 108, name: 'AREA_LASER_LINE', value: '2', type: 1, category: 9, deprecated: false, replacement: null },                   { id: 220, name: 'AREA_PLUS_1', value: '3', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 221, name: 'AREA_PLUS_2', value: '6', type: 1, category: 9, deprecated: false, replacement: null },                       { id: 222, name: 'AREA_PLUS_3', value: '7', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 107, name: 'AREA_POINT', value: '1', type: 1, category: 9, deprecated: false, replacement: null },                        { id: 251, name: 'AREA_SQUARE_1', value: '11', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 252, name: 'AREA_SQUARE_2', value: '12', type: 1, category: 9, deprecated: false, replacement: null },                    { id: 223, name: 'AREA_X_1', value: '8', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 224, name: 'AREA_X_2', value: '9', type: 1, category: 9, deprecated: false, replacement: null },                          { id: 225, name: 'AREA_X_3', value: '10', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 8, name: 'CELL_EMPTY', value: '0', type: 1, category: 8, deprecated: false, replacement: null },                          { id: 93, name: 'CELL_ENTITY', value: '1', type: 1, category: 8, deprecated: false, replacement: null },
  { id: 13, name: 'CELL_OBSTACLE', value: '2', type: 1, category: 8, deprecated: false, replacement: null },                      { id: 10, name: 'CELL_PLAYER', value: '1', type: 1, category: 8, deprecated: true, replacement: 93 },
  { id: 143, name: 'CHIP_ACCELERATION', value: '91', type: 1, category: 7, deprecated: false, replacement: null },                { id: 53, name: 'CHIP_ADRENALINE', value: '16', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 228, name: 'CHIP_ALTERATION', value: '141', type: 1, category: 7, deprecated: false, replacement: null },                 { id: 180, name: 'CHIP_ANTIDOTE', value: '110', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 39, name: 'CHIP_ARMOR', value: '22', type: 1, category: 7, deprecated: false, replacement: null },                        { id: 99, name: 'CHIP_ARMORING', value: '67', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 247, name: 'CHIP_ARSENIC', value: '171', type: 1, category: 7, deprecated: false, replacement: null },                    { id: 155, name: 'CHIP_BALL_AND_CHAIN', value: '93', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 21, name: 'CHIP_BANDAGE', value: '3', type: 1, category: 7, deprecated: false, replacement: null },                       { id: 166, name: 'CHIP_BARK', value: '104', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 241, name: 'CHIP_BOXING_GLOVE', value: '163', type: 1, category: 7, deprecated: false, replacement: null },               { id: 246, name: 'CHIP_BRAINWASHING', value: '170', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 248, name: 'CHIP_BRAMBLE', value: '172', type: 1, category: 7, deprecated: false, replacement: null },                    { id: 167, name: 'CHIP_BURNING', value: '105', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 129, name: 'CHIP_CARAPACE', value: '81', type: 1, category: 7, deprecated: false, replacement: null },                    { id: 165, name: 'CHIP_COLLAR', value: '103', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 203, name: 'CHIP_COVETOUSNESS', value: '120', type: 1, category: 7, deprecated: false, replacement: null },               { id: 231, name: 'CHIP_COVID', value: '152', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 245, name: 'CHIP_CRUSHING', value: '169', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 22, name: 'CHIP_CURE', value: '4', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 238, name: 'CHIP_DESINTEGRATION', value: '160', type: 1, category: 7, deprecated: false, replacement: null },             { id: 132, name: 'CHIP_DEVIL_STRIKE', value: '85', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 249, name: 'CHIP_DOME', value: '173', type: 1, category: 7, deprecated: false, replacement: null },                       { id: 45, name: 'CHIP_DOPING', value: '26', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 23, name: 'CHIP_DRIP', value: '10', type: 1, category: 7, deprecated: false, replacement: null },                         { id: 232, name: 'CHIP_ELEVATION', value: '154', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 164, name: 'CHIP_FEROCITY', value: '102', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 142, name: 'CHIP_FERTILIZER', value: '90', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 113, name: 'CHIP_FIRE_BULB', value: '74', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 29, name: 'CHIP_FLAME', value: '5', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 56, name: 'CHIP_FLASH', value: '6', type: 1, category: 7, deprecated: false, replacement: null },                         { id: 42, name: 'CHIP_FORTRESS', value: '29', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 168, name: 'CHIP_FRACTURE', value: '106', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 240, name: 'CHIP_GRAPPLE', value: '162', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 114, name: 'CHIP_HEALER_BULB', value: '75', type: 1, category: 7, deprecated: false, replacement: null },                 { id: 38, name: 'CHIP_HELMET', value: '21', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 34, name: 'CHIP_ICE', value: '2', type: 1, category: 7, deprecated: false, replacement: null },                           { id: 36, name: 'CHIP_ICEBERG', value: '31', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 126, name: 'CHIP_ICED_BULB', value: '77', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 100, name: 'CHIP_INVERSION', value: '68', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 226, name: 'CHIP_JUMP', value: '144', type: 1, category: 7, deprecated: false, replacement: null },                       { id: 233, name: 'CHIP_KNOWLEDGE', value: '155', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 49, name: 'CHIP_LEATHER_BOOTS', value: '14', type: 1, category: 7, deprecated: false, replacement: null },                { id: 55, name: 'CHIP_LIBERATION', value: '34', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 27, name: 'CHIP_LIGHTNING', value: '33', type: 1, category: 7, deprecated: false, replacement: null },                    { id: 127, name: 'CHIP_LIGHTNING_BULB', value: '78', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 141, name: 'CHIP_LOAM', value: '89', type: 1, category: 7, deprecated: false, replacement: null },                        { id: 250, name: 'CHIP_MANUMISSION', value: '174', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 128, name: 'CHIP_METALLIC_BULB', value: '79', type: 1, category: 7, deprecated: false, replacement: null },               { id: 30, name: 'CHIP_METEORITE', value: '36', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 163, name: 'CHIP_MIRROR', value: '101', type: 1, category: 7, deprecated: false, replacement: null },                     { id: 52, name: 'CHIP_MOTIVATION', value: '15', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 237, name: 'CHIP_MUTATION', value: '159', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 31, name: 'CHIP_PEBBLE', value: '19', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 161, name: 'CHIP_PLAGUE', value: '99', type: 1, category: 7, deprecated: false, replacement: null },                      { id: 227, name: 'CHIP_PLASMA', value: '143', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 205, name: 'CHIP_PRECIPITATION', value: '122', type: 1, category: 7, deprecated: false, replacement: null },              { id: 43, name: 'CHIP_PROTEIN', value: '8', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 194, name: 'CHIP_PUNISHMENT', value: '114', type: 1, category: 7, deprecated: false, replacement: null },                 { id: 112, name: 'CHIP_PUNY_BULB', value: '73', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 54, name: 'CHIP_RAGE', value: '17', type: 1, category: 7, deprecated: false, replacement: null },                         { id: 41, name: 'CHIP_RAMPART', value: '24', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 48, name: 'CHIP_REFLEXES', value: '27', type: 1, category: 7, deprecated: false, replacement: null },                     { id: 24, name: 'CHIP_REGENERATION', value: '35', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 130, name: 'CHIP_REMISSION', value: '80', type: 1, category: 7, deprecated: false, replacement: null },                   { id: 235, name: 'CHIP_REPOTTING', value: '157', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 134, name: 'CHIP_RESURRECTION', value: '84', type: 1, category: 7, deprecated: false, replacement: null },                { id: 32, name: 'CHIP_ROCK', value: '7', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 33, name: 'CHIP_ROCKFALL', value: '32', type: 1, category: 7, deprecated: false, replacement: null },                     { id: 125, name: 'CHIP_ROCKY_BULB', value: '76', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 243, name: 'CHIP_SAVANT_BULB', value: '167', type: 1, category: 7, deprecated: false, replacement: null },                { id: 244, name: 'CHIP_SERUM', value: '168', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 51, name: 'CHIP_SEVEN_LEAGUE_BOOTS', value: '12', type: 1, category: 7, deprecated: false, replacement: null },           { id: 37, name: 'CHIP_SHIELD', value: '20', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 26, name: 'CHIP_SHOCK', value: '1', type: 1, category: 7, deprecated: false, replacement: null },                         { id: 154, name: 'CHIP_SLOW_DOWN', value: '92', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 158, name: 'CHIP_SOLIDIFICATION', value: '96', type: 1, category: 7, deprecated: false, replacement: null },              { id: 157, name: 'CHIP_SOPORIFIC', value: '95', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 28, name: 'CHIP_SPARK', value: '18', type: 1, category: 7, deprecated: false, replacement: null },                        { id: 35, name: 'CHIP_STALACTITE', value: '30', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 44, name: 'CHIP_STEROID', value: '25', type: 1, category: 7, deprecated: false, replacement: null },                      { id: 46, name: 'CHIP_STRETCHING', value: '9', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 242, name: 'CHIP_TACTICIAN_BULB', value: '166', type: 1, category: 7, deprecated: false, replacement: null },             { id: 94, name: 'CHIP_TELEPORTATION', value: '59', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 236, name: 'CHIP_THERAPY', value: '158', type: 1, category: 7, deprecated: false, replacement: null },                    { id: 162, name: 'CHIP_THORN', value: '100', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 160, name: 'CHIP_TOXIN', value: '98', type: 1, category: 7, deprecated: false, replacement: null },                       { id: 156, name: 'CHIP_TRANQUILIZER', value: '94', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 239, name: 'CHIP_TRANSMUTATION', value: '161', type: 1, category: 7, deprecated: false, replacement: null },              { id: 25, name: 'CHIP_VACCINE', value: '11', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 204, name: 'CHIP_VAMPIRIZATION', value: '121', type: 1, category: 7, deprecated: false, replacement: null },              { id: 159, name: 'CHIP_VENOM', value: '97', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 40, name: 'CHIP_WALL', value: '23', type: 1, category: 7, deprecated: false, replacement: null },                         { id: 47, name: 'CHIP_WARM_UP', value: '28', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 140, name: 'CHIP_WHIP', value: '88', type: 1, category: 7, deprecated: false, replacement: null },                        { id: 50, name: 'CHIP_WINGED_BOOTS', value: '13', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 229, name: 'CHIP_WIZARD_BULB', value: '142', type: 1, category: 7, deprecated: false, replacement: null },                { id: 234, name: 'CHIP_WIZARDRY', value: '156', type: 1, category: 7, deprecated: false, replacement: null },
  { id: 96, name: 'COLOR_BLUE', value: '255', type: 1, category: 12, deprecated: false, replacement: null },                      { id: 97, name: 'COLOR_GREEN', value: '65280', type: 1, category: 12, deprecated: false, replacement: null },
  { id: 98, name: 'COLOR_RED', value: '16711680', type: 1, category: 12, deprecated: false, replacement: null },                  { id: 190, name: 'CRITICAL_FACTOR', value: '1.3', type: 1, category: 8, deprecated: false, replacement: null },
  { id: 2, name: 'E', value: '2.71828182846', type: 1, category: 1, deprecated: false, replacement: null },                       { id: 67, name: 'EFFECT_ABSOLUTE_SHIELD', value: '6', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 188, name: 'EFFECT_ABSOLUTE_VULNERABILITY', value: '27', type: 4, category: 5, deprecated: false, replacement: null },    { id: 186, name: 'EFFECT_AFTEREFFECT', value: '25', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 277, name: 'EFFECT_ALLY_KILLED_TO_AGILITY', value: '55', type: 1, category: 5, deprecated: false, replacement: null },    { id: 179, name: 'EFFECT_ANTIDOTE', value: '23', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 261, name: 'EFFECT_ATTRACT', value: '46', type: 1, category: 5, deprecated: false, replacement: null },                   { id: 118, name: 'EFFECT_BOOST_MAX_LIFE', value: '12', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 66, name: 'EFFECT_BUFF_AGILITY', value: '4', type: 1, category: 5, deprecated: false, replacement: null },                { id: 65, name: 'EFFECT_BUFF_FORCE', value: '3', type: 1, category: 5, deprecated: true, replacement: 138 },
  { id: 69, name: 'EFFECT_BUFF_MP', value: '7', type: 1, category: 5, deprecated: false, replacement: null },                     { id: 170, name: 'EFFECT_BUFF_RESISTANCE', value: '21', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 138, name: 'EFFECT_BUFF_STRENGTH', value: '3', type: 1, category: 5, deprecated: false, replacement: null },              { id: 70, name: 'EFFECT_BUFF_TP', value: '8', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 169, name: 'EFFECT_BUFF_WISDOM', value: '22', type: 1, category: 5, deprecated: false, replacement: null },               { id: 289, name: 'EFFECT_CRITICAL_TO_HEAL', value: '58', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 63, name: 'EFFECT_DAMAGE', value: '1', type: 1, category: 5, deprecated: false, replacement: null },                      { id: 171, name: 'EFFECT_DAMAGE_RETURN', value: '20', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 213, name: 'EFFECT_DAMAGE_TO_ABSOLUTE_SHIELD', value: '34', type: 1, category: 5, deprecated: false, replacement: null }, { id: 214, name: 'EFFECT_DAMAGE_TO_STRENGTH', value: '35', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 71, name: 'EFFECT_DEBUFF', value: '9', type: 1, category: 5, deprecated: false, replacement: null },                      { id: 64, name: 'EFFECT_HEAL', value: '2', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 136, name: 'EFFECT_INVERT', value: '11', type: 1, category: 5, deprecated: false, replacement: null },                    { id: 175, name: 'EFFECT_KILL', value: '16', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 287, name: 'EFFECT_KILL_TO_TP', value: '56', type: 1, category: 5, deprecated: false, replacement: null },                { id: 191, name: 'EFFECT_LIFE_DAMAGE', value: '28', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 265, name: 'EFFECT_MODIFIER_IRREDUCTIBLE', value: '16', type: 1, category: 5, deprecated: false, replacement: null },     { id: 200, name: 'EFFECT_MODIFIER_MULTIPLIED_BY_TARGETS', value: '2', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 153, name: 'EFFECT_MODIFIER_NOT_REPLACEABLE', value: '8', type: 1, category: 5, deprecated: false, replacement: null },   { id: 202, name: 'EFFECT_MODIFIER_ON_CASTER', value: '4', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 201, name: 'EFFECT_MODIFIER_STACKABLE', value: '1', type: 1, category: 5, deprecated: false, replacement: null },         { id: 260, name: 'EFFECT_MOVED_TO_MP', value: '50', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 197, name: 'EFFECT_NOVA_DAMAGE', value: '30', type: 1, category: 5, deprecated: false, replacement: null },               { id: 215, name: 'EFFECT_NOVA_DAMAGE_TO_MAGIC', value: '36', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 254, name: 'EFFECT_NOVA_VITALITY', value: '45', type: 1, category: 5, deprecated: false, replacement: null },             { id: 119, name: 'EFFECT_POISON', value: '13', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 212, name: 'EFFECT_POISON_TO_SCIENCE', value: '33', type: 1, category: 5, deprecated: false, replacement: null },         { id: 151, name: 'EFFECT_PROPAGATION', value: '43', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 262, name: 'EFFECT_PUSH', value: '51', type: 1, category: 5, deprecated: false, replacement: null },                      { id: 216, name: 'EFFECT_RAW_ABSOLUTE_SHIELD', value: '37', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 230, name: 'EFFECT_RAW_BUFF_AGILITY', value: '41', type: 1, category: 5, deprecated: false, replacement: null },          { id: 218, name: 'EFFECT_RAW_BUFF_MAGIC', value: '39', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 210, name: 'EFFECT_RAW_BUFF_MP', value: '31', type: 1, category: 5, deprecated: false, replacement: null },               { id: 274, name: 'EFFECT_RAW_BUFF_POWER', value: '52', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 152, name: 'EFFECT_RAW_BUFF_RESISTANCE', value: '42', type: 1, category: 5, deprecated: false, replacement: null },       { id: 219, name: 'EFFECT_RAW_BUFF_SCIENCE', value: '40', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 217, name: 'EFFECT_RAW_BUFF_STRENGTH', value: '38', type: 1, category: 5, deprecated: false, replacement: null },         { id: 211, name: 'EFFECT_RAW_BUFF_TP', value: '32', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 150, name: 'EFFECT_RAW_BUFF_WISDOM', value: '44', type: 1, category: 5, deprecated: false, replacement: null },           { id: 288, name: 'EFFECT_RAW_HEAL', value: '57', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 276, name: 'EFFECT_RAW_RELATIVE_SHIELD', value: '54', type: 1, category: 5, deprecated: false, replacement: null },       { id: 68, name: 'EFFECT_RELATIVE_SHIELD', value: '5', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 258, name: 'EFFECT_REMOVE_SHACKLES', value: '49', type: 1, category: 5, deprecated: false, replacement: null },           { id: 275, name: 'EFFECT_REPEL', value: '53', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 137, name: 'EFFECT_RESURRECT', value: '15', type: 1, category: 5, deprecated: false, replacement: null },                 { id: 256, name: 'EFFECT_SHACKLE_AGILITY', value: '47', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 178, name: 'EFFECT_SHACKLE_MAGIC', value: '24', type: 1, category: 5, deprecated: false, replacement: null },             { id: 174, name: 'EFFECT_SHACKLE_MP', value: '17', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 172, name: 'EFFECT_SHACKLE_STRENGTH', value: '19', type: 1, category: 5, deprecated: false, replacement: null },          { id: 173, name: 'EFFECT_SHACKLE_TP', value: '18', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 257, name: 'EFFECT_SHACKLE_WISDOM', value: '48', type: 1, category: 5, deprecated: false, replacement: null },            { id: 255, name: 'EFFECT_SLIDE_TO', value: '46', type: 1, category: 5, deprecated: true, replacement: 261 },
  { id: 196, name: 'EFFECT_STEAL_ABSOLUTE_SHIELD', value: '29', type: 1, category: 5, deprecated: false, replacement: null },     { id: 139, name: 'EFFECT_SUMMON', value: '14', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 121, name: 'EFFECT_TARGET_ALLIES', value: '2', type: 1, category: 5, deprecated: false, replacement: null },              { id: 192, name: 'EFFECT_TARGET_ALWAYS_CASTER', value: '32', type: 1, category: 5, deprecated: true, replacement: 202 },
  { id: 122, name: 'EFFECT_TARGET_CASTER', value: '4', type: 1, category: 5, deprecated: false, replacement: null },              { id: 120, name: 'EFFECT_TARGET_ENEMIES', value: '1', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 176, name: 'EFFECT_TARGET_NON_SUMMONS', value: '8', type: 1, category: 5, deprecated: false, replacement: null },         { id: 123, name: 'EFFECT_TARGET_NOT_CASTER', value: '0', type: 1, category: 5, deprecated: true, replacement: 122 },
  { id: 124, name: 'EFFECT_TARGET_SUMMONS', value: '16', type: 1, category: 5, deprecated: false, replacement: null },            { id: 135, name: 'EFFECT_TELEPORT', value: '10', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 187, name: 'EFFECT_VULNERABILITY', value: '26', type: 1, category: 5, deprecated: false, replacement: null },             { id: 115, name: 'ENTITY_BULB', value: '2', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 293, name: 'ENTITY_CHEST', value: '4', type: 1, category: 5, deprecated: false, replacement: null },                      { id: 116, name: 'ENTITY_LEEK', value: '1', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 193, name: 'ENTITY_TURRET', value: '3', type: 1, category: 5, deprecated: false, replacement: null },                     { id: 184, name: 'FIGHT_CONTEXT_BATTLE_ROYALE', value: '5', type: 1, category: 9, deprecated: true, replacement: null },
  { id: 91, name: 'FIGHT_CONTEXT_CHALLENGE', value: '1', type: 1, category: 9, deprecated: false, replacement: null },            { id: 90, name: 'FIGHT_CONTEXT_GARDEN', value: '2', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 89, name: 'FIGHT_CONTEXT_TEST', value: '0', type: 1, category: 9, deprecated: false, replacement: null },                 { id: 92, name: 'FIGHT_CONTEXT_TOURNAMENT', value: '3', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 185, name: 'FIGHT_TYPE_BATTLE_ROYALE', value: '3', type: 1, category: 9, deprecated: false, replacement: null },          { id: 87, name: 'FIGHT_TYPE_FARMER', value: '1', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 86, name: 'FIGHT_TYPE_SOLO', value: '0', type: 1, category: 9, deprecated: false, replacement: null },                    { id: 88, name: 'FIGHT_TYPE_TEAM', value: '2', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 290, name: 'Infinity', value: 'Infinity', type: 7, category: 1, deprecated: false, replacement: null },                   { id: 85, name: 'INSTRUCTIONS_LIMIT', value: '300000', type: 1, category: 10, deprecated: false, replacement: null },
  { id: 284, name: 'LAUNCH_TYPE_CIRCLE', value: '7', type: 1, category: 9, deprecated: false, replacement: null },                { id: 279, name: 'LAUNCH_TYPE_DIAGONAL', value: '2', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 282, name: 'LAUNCH_TYPE_DIAGONAL_INVERTED', value: '5', type: 1, category: 9, deprecated: false, replacement: null },     { id: 278, name: 'LAUNCH_TYPE_LINE', value: '1', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 283, name: 'LAUNCH_TYPE_LINE_INVERTED', value: '6', type: 1, category: 9, deprecated: false, replacement: null },         { id: 280, name: 'LAUNCH_TYPE_STAR', value: '3', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 281, name: 'LAUNCH_TYPE_STAR_INVERTED', value: '4', type: 1, category: 9, deprecated: false, replacement: null },         { id: 149, name: 'MAP_BEACH', value: '6', type: 1, category: 8, deprecated: false, replacement: null },
  { id: 146, name: 'MAP_DESERT', value: '3', type: 1, category: 8, deprecated: false, replacement: null },                        { id: 145, name: 'MAP_FACTORY', value: '2', type: 1, category: 8, deprecated: false, replacement: null },
  { id: 147, name: 'MAP_FOREST', value: '4', type: 1, category: 8, deprecated: false, replacement: null },                        { id: 148, name: 'MAP_GLACIER', value: '5', type: 1, category: 8, deprecated: false, replacement: null },
  { id: 144, name: 'MAP_NEXUS', value: '1', type: 1, category: 8, deprecated: false, replacement: null },                         { id: 3, name: 'MAX_TURNS', value: '64', type: 1, category: 9, deprecated: false, replacement: null },
  { id: 73, name: 'MESSAGE_ATTACK', value: '2', type: 1, category: 11, deprecated: false, replacement: null },                    { id: 79, name: 'MESSAGE_BUFF_AGILITY', value: '8', type: 1, category: 11, deprecated: false, replacement: null },
  { id: 78, name: 'MESSAGE_BUFF_FORCE', value: '7', type: 1, category: 11, deprecated: false, replacement: null },                { id: 76, name: 'MESSAGE_BUFF_MP', value: '5', type: 1, category: 11, deprecated: false, replacement: null },
  { id: 77, name: 'MESSAGE_BUFF_TP', value: '6', type: 1, category: 11, deprecated: false, replacement: null },                   { id: 84, name: 'MESSAGE_CUSTOM', value: '13', type: 1, category: 11, deprecated: false, replacement: null },
  { id: 74, name: 'MESSAGE_DEBUFF', value: '3\r\n\r\n', type: 1, category: 11, deprecated: false, replacement: null },            { id: 72, name: 'MESSAGE_HEAL', value: '1', type: 1, category: 11, deprecated: false, replacement: null },
  { id: 81, name: 'MESSAGE_MOVE_AWAY', value: '10', type: 1, category: 11, deprecated: false, replacement: null },                { id: 83, name: 'MESSAGE_MOVE_AWAY_CELL', value: '12', type: 1, category: 11, deprecated: false, replacement: null },
  { id: 80, name: 'MESSAGE_MOVE_TOWARD', value: '9', type: 1, category: 11, deprecated: false, replacement: null },               { id: 82, name: 'MESSAGE_MOVE_TOWARD_CELL', value: '11', type: 1, category: 11, deprecated: false, replacement: null },
  { id: 75, name: 'MESSAGE_SHIELD', value: '4', type: 1, category: 11, deprecated: false, replacement: null },                    { id: 291, name: 'NaN', value: 'NaN', type: 7, category: 1, deprecated: false, replacement: null },
  { id: 133, name: 'OPERATIONS_LIMIT', value: '20000000', type: 1, category: 10, deprecated: false, replacement: null },          { id: 1, name: 'PI', value: '3.14159265359', type: 1, category: 1, deprecated: false, replacement: null },
  { id: 4, name: 'SORT_ASC', value: '0', type: 1, category: 3, deprecated: false, replacement: null },                            { id: 5, name: 'SORT_DESC', value: '1', type: 1, category: 3, deprecated: false, replacement: null },
  { id: 189, name: 'SUMMON_LIMIT', value: '8', type: 1, category: 9, deprecated: false, replacement: null },                      { id: 104, name: 'TYPE_ARRAY', value: '4', type: 1, category: 10, deprecated: false, replacement: null },
  { id: 102, name: 'TYPE_BOOLEAN', value: '2', type: 1, category: 10, deprecated: false, replacement: null },                     { id: 264, name: 'TYPE_CLASS', value: '6', type: 1, category: 10, deprecated: false, replacement: null },
  { id: 105, name: 'TYPE_FUNCTION', value: '5', type: 1, category: 10, deprecated: false, replacement: null },                    { id: 292, name: 'TYPE_MAP', value: '8', type: 6, category: 10, deprecated: false, replacement: null },
  { id: 106, name: 'TYPE_NULL', value: '0', type: 1, category: 10, deprecated: false, replacement: null },                        { id: 101, name: 'TYPE_NUMBER', value: '1', type: 1, category: 10, deprecated: false, replacement: null },
  { id: 263, name: 'TYPE_OBJECT', value: '7', type: 1, category: 10, deprecated: false, replacement: null },                      { id: 103, name: 'TYPE_STRING', value: '3', type: 1, category: 10, deprecated: false, replacement: null },
  { id: 177, name: 'USE_CRITICAL', value: '2', type: 1, category: 5, deprecated: false, replacement: null },                      { id: 58, name: 'USE_FAILED', value: '0', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 61, name: 'USE_INVALID_COOLDOWN', value: '-3', type: 1, category: 5, deprecated: false, replacement: null },              { id: 62, name: 'USE_INVALID_POSITION', value: '-4', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 59, name: 'USE_INVALID_TARGET', value: '-1', type: 1, category: 5, deprecated: false, replacement: null },                { id: 60, name: 'USE_NOT_ENOUGH_TP', value: '-2', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 131, name: 'USE_RESURRECT_INVALID_ENTITY', value: '-6', type: 1, category: 7, deprecated: false, replacement: null },     { id: 57, name: 'USE_SUCCESS', value: '1', type: 1, category: 5, deprecated: false, replacement: null },
  { id: 117, name: 'USE_TOO_MANY_SUMMONS', value: '-5', type: 1, category: 5, deprecated: false, replacement: null },             { id: 181, name: 'WEAPON_AXE', value: '109', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 270, name: 'WEAPON_BAZOOKA', value: '184', type: 1, category: 6, deprecated: false, replacement: null },                  { id: 95, name: 'WEAPON_B_LASER', value: '60', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 183, name: 'WEAPON_BROADSWORD', value: '108', type: 1, category: 6, deprecated: false, replacement: null },               { id: 273, name: 'WEAPON_DARK_KATANA', value: '187', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 17, name: 'WEAPON_DESTROYER', value: '40', type: 1, category: 6, deprecated: false, replacement: null },                  { id: 9, name: 'WEAPON_DOUBLE_GUN', value: '39', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 19, name: 'WEAPON_ELECTRISOR', value: '44', type: 1, category: 6, deprecated: false, replacement: null },                 { id: 285, name: 'WEAPON_ENHANCED_LIGHTNINGER', value: '225', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 259, name: 'WEAPON_EXPLORER_RIFLE', value: '175', type: 1, category: 6, deprecated: false, replacement: null },           { id: 16, name: 'WEAPON_FLAME_THROWER', value: '46', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 18, name: 'WEAPON_GAZOR', value: '48', type: 1, category: 6, deprecated: false, replacement: null },                      { id: 15, name: 'WEAPON_GRENADE_LAUNCHER', value: '43', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 206, name: 'WEAPON_ILLICIT_GRENADE_LAUNCHER', value: '116', type: 1, category: 6, deprecated: false, replacement: null }, { id: 195, name: 'WEAPON_J_LASER', value: '115', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 182, name: 'WEAPON_KATANA', value: '107', type: 1, category: 6, deprecated: false, replacement: null },                   { id: 14, name: 'WEAPON_LASER', value: '42', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 266, name: 'WEAPON_LIGHTNINGER', value: '180', type: 1, category: 6, deprecated: false, replacement: null },              { id: 7, name: 'WEAPON_MACHINE_GUN', value: '38', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 12, name: 'WEAPON_MAGNUM', value: '45', type: 1, category: 6, deprecated: false, replacement: null },                     { id: 20, name: 'WEAPON_M_LASER', value: '47', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 207, name: 'WEAPON_MYSTERIOUS_ELECTRISOR', value: '117', type: 1, category: 6, deprecated: false, replacement: null },    { id: 268, name: 'WEAPON_NEUTRINO', value: '182', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 6, name: 'WEAPON_PISTOL', value: '37', type: 1, category: 6, deprecated: false, replacement: null },                      { id: 209, name: 'WEAPON_REVOKED_M_LASER', value: '119', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 199, name: 'WEAPON_RHINO', value: '153', type: 1, category: 6, deprecated: false, replacement: null },                    { id: 198, name: 'WEAPON_RIFLE', value: '151', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 11, name: 'WEAPON_SHOTGUN', value: '41', type: 1, category: 6, deprecated: false, replacement: null },                    { id: 208, name: 'WEAPON_UNBRIDLED_GAZOR', value: '118', type: 1, category: 6, deprecated: false, replacement: null },
  { id: 286, name: 'WEAPON_UNSTABLE_DESTROYER', value: '226', type: 1, category: 6, deprecated: false, replacement: null }
]
export { CONSTANTS }