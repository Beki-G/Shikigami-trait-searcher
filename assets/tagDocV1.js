const tagDefinition = [
  {
    "tag": "aoe_cc",
    "tag_definition": "has a skill that innately can inflict cc on the opposing team"
  },
  {
    "tag": "aoe_direct_damage",
    "tag_definition": "has an AOE direct damage skill."
  },
  {
    "tag": "aoe_indirect_damage",
    "tag_definition": "has a skill that inflicts AOE indirect damage. IE sakura, kiyohime, shiro_mujo but not menreki as she is RT"
  },
  {
    "tag": "aoe_multi_hit",
    "tag_definition": "has a skill that does multiple aoe damage instances"
  },
  {
    "tag": "aoe_poison",
    "tag_definition": "has a skill that inflicts poison on the opposing team"
  },
  {
    "tag": "aoe_single_hit",
    "tag_definition": "has a skill that does one aoe damage instance"
  },
  {
    "tag": "attack_down",
    "tag_definition": "has a skill that can apply the attack down debuff"
  },
  {
    "tag": "attack_up",
    "tag_definition": "has a skill that can apply the attack up buff"
  },
  {
    "tag": "auto_effect_activation",
    "tag_definition": "has a skill that allows a skill or effect to automatically activate outside of their turn.  IE dodomeki, jizu, seawatch kingyo"
  },
  {
    "tag": "auto_target_highest_max",
    "tag_definition": "when set to auto without a target marker will use skills on highest hp max"
  },
  {
    "tag": "auto_target_highest_percent",
    "tag_definition": "when set to auto without a target marker will use skills on highest hp %"
  },
  {
    "tag": "auto_target_lowest",
    "tag_definition": "when set to auto without a target marker will use skills on lowest hp %"
  },
  {
    "tag": "auto_target_random",
    "tag_definition": "when set to auto without a target marker will use skills on random targets"
  },
  {
    "tag": "auto_target_second_lowest",
    "tag_definition": "when set to auto without a target marker will use skills on the next to lowest hp %"
  },
  {
    "tag": "beyond_death",
    "tag_definition": "has a skill or effect that persists beyond the unit perishing"
  },
  {
    "tag": "bypass_debuff_immune",
    "tag_definition": "has a skill that inflicts a debuff that bypasses immunity typically seen on bosses. The icon is purple in color"
  },
  {
    "tag": "bypass_heal_down",
    "tag_definition": "has a skill that can partly or entirely bypass the heal down debuff.  Recover counts for this."
  },
  {
    "tag": "bypass_passive",
    "tag_definition": "has a skill that bypasses the passives of the target"
  },
  {
    "tag": "bypass_shields",
    "tag_definition": "has a skill that bypasses shields on the target"
  },
  {
    "tag": "bypass_souls",
    "tag_definition": "has a skill that bypasses the souls of the target.  Note: do not include indirect damage, only skills that specify they bypass souls"
  },
  {
    "tag": "call_to_arms",
    "tag_definition": "has a skill that can cause an ally to co-op with a normal attack when this skill is used"
  },
  {
    "tag": "co-op_chance",
    "tag_definition": "has a skill that can initiate a co-op normal attack when an ally uses a normal attack"
  },
  {
    "tag": "confuse",
    "tag_definition": "has a skill that can inflict the confuse effect"
  },
  {
    "tag": "cooldown",
    "tag_definition": "has a skill with a cooldown"
  },
  {
    "tag": "counter_attack",
    "tag_definition": "has a skill that launches a counter attack when a condition is fulfilled."
  },
  {
    "tag": "counter_attack_exception",
    "tag_definition": "has a skill that behaves diffrently when launching a counter attack. IE Shuten Doji, Hana, itsumade"
  },
  {
    "tag": "crit_damage_down",
    "tag_definition": "has a skill that can apply the crit damage down debuff"
  },
  {
    "tag": "crit_damage_up",
    "tag_definition": "has a skill that can apply the crit damage up buff"
  },
  {
    "tag": "crit_down",
    "tag_definition": "has a skill that can apply the crit down debuff"
  },
  {
    "tag": "crit_resistance",
    "tag_definition": "has a skill that lowers crit chance of attacker when being attacked."
  },
  {
    "tag": "crit_up",
    "tag_definition": "has a skill that can apply the crit up buff"
  },
  {
    "tag": "damage_immunity",
    "tag_definition": "has a skill that provides damage immunity"
  },
  {
    "tag": "damage_reduction_others",
    "tag_definition": "has a skill that reduces incoming damage by a percent to allies."
  },
  {
    "tag": "damage_reduction_self",
    "tag_definition": "has a skill that reduces incoming damage by a percent to this shiki"
  },
  {
    "tag": "damage_reflect",
    "tag_definition": "has a skill that reflects damage back to the attacker"
  },
  {
    "tag": "damage_transfer",
    "tag_definition": "has a skill that transfers damage from one unit to another"
  },
  {
    "tag": "daze",
    "tag_definition": "has a skill that can inflict the stun effect"
  },
  {
    "tag": "defense_down",
    "tag_definition": "has a skill that can apply the defense down debuff"
  },
  {
    "tag": "defense_ignore",
    "tag_definition": "has a skill or trait that ignores defense in part or in whole when calculating damage"
  },
  {
    "tag": "defense_up",
    "tag_definition": "has a skill that can apply the defense up buff"
  },
  {
    "tag": "dispel_buff_foe_team",
    "tag_definition": "dispels buff(s) on opposing team"
  },
  {
    "tag": "dispel_buff_foe_target",
    "tag_definition": "dispels buff(s) on opposing target, player or conditionally chosen."
  },
  {
    "tag": "dispel_cc_self_only",
    "tag_definition": "dispels a crowd control effect on self"
  },
  {
    "tag": "dispel_cc_target",
    "tag_definition": "dispels a crowd control effect on ally target, player or conditionally chosen."
  },
  {
    "tag": "dispel_cc_team",
    "tag_definition": "dispels a crowd control effect on team"
  },
  {
    "tag": "dispel_debuff_ally_target",
    "tag_definition": "dispels debuff(s) on an ally target, player or conditionally chosen.  CC effects are considered debuffs"
  },
  {
    "tag": "dispel_debuff_ally_team",
    "tag_definition": "dispels debuff(s) on ally team.  CC effects are considered debuffs"
  },
  {
    "tag": "dispel_debuff_self_only",
    "tag_definition": "dispels debuff(s) on self. cc effects are considered debuffs"
  },
  {
    "tag": "effect_hit_down",
    "tag_definition": "has a skill that can apply the effect hit down debuff"
  },
  {
    "tag": "effect_hit_up",
    "tag_definition": "has a skill that can apply the effect hit up buff"
  },
  {
    "tag": "effect_resistance_down",
    "tag_definition": "has a skill that can apply the effect resistance down debuff"
  },
  {
    "tag": "effect_resistance_up",
    "tag_definition": "has a skill that can apply the effect resistance up buff"
  },
  {
    "tag": "exclusive_effect",
    "tag_definition": "has a skill effect that is exclusive. in cases of multiple instances, only one will function"
  },
  {
    "tag": "extra_turn",
    "tag_definition": "has a skill that can provide an extra full turn"
  },
  {
    "tag": "freeze",
    "tag_definition": "has a skill that can inflict the freeze effect"
  },
  {
    "tag": "has_passive",
    "tag_definition": "This shiki has a passive"
  },
  {
    "tag": "heal",
    "tag_definition": "Instigates any sort of healing. wildcard search of heal effects.  can be used when searching for things that feed the sunshine doll"
  },
  {
    "tag": "heal_affects_summon",
    "tag_definition": "Do any of the healing effects work on summoned units"
  },
  {
    "tag": "heal_down",
    "tag_definition": "has a skill that can apply the heal down debuff"
  },
  {
    "tag": "heal_self_only",
    "tag_definition": "Heal effect that heals user alone.  IE lifesteal on sesshamaru.  not exclusive with other heal tags. kusa would have all heal tags"
  },
  {
    "tag": "heal_target",
    "tag_definition": "Heals a target either by player target or condition automatically"
  },
  {
    "tag": "heal_team",
    "tag_definition": "AOE heal."
  },
  {
    "tag": "heal_up",
    "tag_definition": "has a skill that can apply the heal up buff"
  },
  {
    "tag": "immunity_cc",
    "tag_definition": "has immunity to some or all crowd control effects."
  },
  {
    "tag": "infrequent_skill_use",
    "tag_definition": "for shiki who rarely use skills or alternate between skills and normal attacks."
  },
  {
    "tag": "instant_action",
    "tag_definition": "has a skill that provides an instant action to target ally"
  },
  {
    "tag": "isolation",
    "tag_definition": "has a skill that can inflict the isolation effect"
  },
  {
    "tag": "layers_others",
    "tag_definition": "has a skill that gains layers or stacks residing on other shiki.  this can be a flat buff/debuff or a named effect that is used by another skill"
  },
  {
    "tag": "layers_self",
    "tag_definition": "has a skill that gains layers or stacks residing on itself.  this can be a flat buff or a named effect that is used by another skill"
  },
  {
    "tag": "low_hp_skill",
    "tag_definition": "has a skill that interacts differently when hp is lower.  this can be the shiki itself or others"
  },
  {
    "tag": "luck_reliant",
    "tag_definition": "has a skill that has a chance to get stronger or extend it's duration. IE yoko, yashsa, kainin, shuten, enmusabi"
  },
  {
    "tag": "morph",
    "tag_definition": "has a skill that can inflict the morph effect"
  },
  {
    "tag": "movebar_lower_target",
    "tag_definition": "ST move bar reduction"
  },
  {
    "tag": "movebar_lower_team",
    "tag_definition": "AOE move bar reduction"
  },
  {
    "tag": "movebar_raise_self",
    "tag_definition": "self move bar acceleration. IE shishio, hana,"
  },
  {
    "tag": "movebar_raise_target",
    "tag_definition": "move bar acceleration of specific targets, player or conditionally chosen"
  },
  {
    "tag": "movebar_raise_team",
    "tag_definition": "AOE move bar acceleration. IE maki, yamasagui"
  },
  {
    "tag": "nomal_attack_multi_hit",
    "tag_definition": "has a normal attack that deals multiple instances of damage within an action"
  },
  {
    "tag": "normal_attack_direct",
    "tag_definition": "has a normal attack that deals direct damage"
  },
  {
    "tag": "normal_attack_indirect",
    "tag_definition": "has a normal attack that deals indirect damage"
  },
  {
    "tag": "normal_attack_single_hit",
    "tag_definition": "has a normal attack that deals a single instance of damage"
  },
  {
    "tag": "orb_cost_0",
    "tag_definition": "has a skill with orb cost 0 (excluding normal attacks)"
  },
  {
    "tag": "orb_cost_1",
    "tag_definition": "has a skill with orb cost 1"
  },
  {
    "tag": "orb_cost_2",
    "tag_definition": "has a skill with orb cost 2"
  },
  {
    "tag": "orb_cost_3",
    "tag_definition": "has a skill with orb cost 3"
  },
  {
    "tag": "orb_cost_4",
    "tag_definition": "has a skill with orb cost 4"
  },
  {
    "tag": "orb_cost_5+",
    "tag_definition": "has a skill with orb cost 5 or greater"
  },
  {
    "tag": "orb_cost_variable",
    "tag_definition": "has a skill with orb cost that varies.  (not from skill ups, but varies within a match depending on variables.)"
  },
  {
    "tag": "orb_production",
    "tag_definition": "has a skill that creates orbs"
  },
  {
    "tag": "orb_removal",
    "tag_definition": "has a skill that removes orb(s) from your opponents"
  },
  {
    "tag": "orb_steal",
    "tag_definition": "has a skill that steals an orb(s) from your opponent and adds it to your side"
  },
  {
    "tag": "passive_functions_despite_utta",
    "tag_definition": "has a passive that functions despite being \"unable to take actions\""
  },
  {
    "tag": "passive_seal",
    "tag_definition": "Has an effect that seals passives"
  },
  {
    "tag": "provocation",
    "tag_definition": "has a skill that can inflict the provocation effect"
  },
  {
    "tag": "random_cc",
    "tag_definition": "has a skill that inflicts a crowd control effect on randomly selected targets"
  },
  {
    "tag": "random_direct_damage",
    "tag_definition": "has a skill that deals direct damage to randomly selected targets"
  },
  {
    "tag": "random_indirect_damage",
    "tag_definition": "has a skill that deals indirect damage to randomly selected targets"
  },
  {
    "tag": "random_multi_hit",
    "tag_definition": "has a skill that deals multiple instances of damage to randomly selected targets"
  },
  {
    "tag": "random_poison",
    "tag_definition": "has a skill that inflicts poison on randomly selected targets"
  },
  {
    "tag": "random_single_hit",
    "tag_definition": "has a skill that deals a single instance of damage to a randomly selected target"
  },
  {
    "tag": "rarity_limited",
    "tag_definition": "is from a limited time event.  account must be lvl 40 or above to send or recive shards of these shikigami"
  },
  {
    "tag": "rarity_n",
    "tag_definition": "is a N rarity shikigami  - fodder"
  },
  {
    "tag": "rarity_onmyoji",
    "tag_definition": "is an onmyoji"
  },
  {
    "tag": "rarity_r",
    "tag_definition": "is a R rarity shikigami"
  },
  {
    "tag": "rarity_sp",
    "tag_definition": "is a SP rarity shikigami"
  },
  {
    "tag": "rarity_sr",
    "tag_definition": "is a SR rarity shikigami"
  },
  {
    "tag": "rarity_ssn",
    "tag_definition": "is a SSN rarity shikigami - meme fodder"
  },
  {
    "tag": "rarity_ssr",
    "tag_definition": "is a SSR rarity shikigami"
  },
  {
    "tag": "realm_ally",
    "tag_definition": "has a skill that creates a realm on your side of the field.  IE most realms"
  },
  {
    "tag": "realm_foe",
    "tag_definition": "has a skill that creates a realm on your opponent's side of the field.  IE vengeful hannya"
  },
  {
    "tag": "recover_self_only",
    "tag_definition": "Recover effect self only"
  },
  {
    "tag": "recover_target",
    "tag_definition": "Recover effect on target either player or conditionally selected"
  },
  {
    "tag": "recover_team",
    "tag_definition": "Recover effect AOE"
  },
  {
    "tag": "reduce_max_hp",
    "tag_definition": "has a skill that reduces the max hp of a unit.  indicated by a portion of the hp bar turning grey."
  },
  {
    "tag": "remove_cc_self_only",
    "tag_definition": "removes a crowd control effect from self"
  },
  {
    "tag": "remove_cc_target",
    "tag_definition": "removes a crowd control effect on target, player or conditionally chosen. IE demonic_shuten_doji as his is conditional"
  },
  {
    "tag": "remove_cc_team",
    "tag_definition": "removes a crowd control effect from team."
  },
  {
    "tag": "resurrection_block",
    "tag_definition": "has a skill that can block revival in some fashion.  IE shiro mujo, enma, sesshamaru, kiyoshi imoto"
  },
  {
    "tag": "resurrection_self",
    "tag_definition": "has a skill that resurrects itself upon death"
  },
  {
    "tag": "resurrection_target",
    "tag_definition": "has a skill that resurrects targeted dead shiki"
  },
  {
    "tag": "resurrection_team",
    "tag_definition": "has a skill that resurrects all dead teammates"
  },
  {
    "tag": "shelter",
    "tag_definition": "has a skill that provides the shelter buff"
  },
  {
    "tag": "shield_self_only",
    "tag_definition": "Produces a shield on self only. IE yuki_onna, kikyo"
  },
  {
    "tag": "shield_target",
    "tag_definition": "Produces a shield on a single unit or defined set of units.  IE auzure_ichimokuren, ichimokuren, chocho"
  },
  {
    "tag": "shield_team",
    "tag_definition": "Produces a shield for the team.  IE ichimokuren, koi, shiro"
  },
  {
    "tag": "silence",
    "tag_definition": "has a skill that can inflict the silence effect"
  },
  {
    "tag": "skill_redirection",
    "tag_definition": "has a skill that prevents or redirects opponents ST skills in some manner"
  },
  {
    "tag": "slow",
    "tag_definition": "has a skill that can apply the slow debuff"
  },
  {
    "tag": "soul_seal",
    "tag_definition": "Has an effect that seals soul effects"
  },
  {
    "tag": "speed",
    "tag_definition": "has a skill that can apply the speed buff"
  },
  {
    "tag": "stat_reliant_skill_attack",
    "tag_definition": "has a skill that mentions the attack stat is used for calculating the outcome or behavior. Excludes normal attacks"
  },
  {
    "tag": "stat_reliant_skill_crit",
    "tag_definition": "has a skill that mentions crits will behave different"
  },
  {
    "tag": "stat_reliant_skill_def",
    "tag_definition": "has a skill that mentions the def stat is used for calculating the outcome or behavior."
  },
  {
    "tag": "stat_reliant_skill_hp",
    "tag_definition": "has a skill that mentions the hp stat is used for calculating the outcome or behavior."
  },
  {
    "tag": "stat_reliant_skill_speed",
    "tag_definition": "has a skill that mentions the speed stat is used for calculating the outcome or behavior."
  },
  {
    "tag": "summoner_ally",
    "tag_definition": "has a skill that summons a unit to take the summon spot on your side of the map."
  },
  {
    "tag": "summoner_foe",
    "tag_definition": "has a skill that summons a unit to take the summon spot on your opponent's side of the map."
  },
  {
    "tag": "sustainable",
    "tag_definition": "has a skill that counts duration by the skill user's turns, not by the individual units it affects"
  },
  {
    "tag": "targeted_cc",
    "tag_definition": "has a skill that inflicts a crowd control effect on a single target or set of targets defined by player or conditions"
  },
  {
    "tag": "targeted_direct_damage",
    "tag_definition": "has a skill that deals direct damage to a single target or set of targets defined by player or conditions."
  },
  {
    "tag": "targeted_indirect_damage",
    "tag_definition": "has a skill that deals indirect damage to a single target or set of targets defined by player or conditions"
  },
  {
    "tag": "targeted_multi_hit",
    "tag_definition": "has a skill that deals multiple instances of damage to a single target or set of targets defined by player or conditions"
  },
  {
    "tag": "targeted_poison",
    "tag_definition": "has a skill that inflicts poison on a single target or set of targets defined by player or conditions"
  },
  {
    "tag": "targeted_single_hit",
    "tag_definition": "has a skill that deals a single instance of damage to a single target or set of targets defined by player or conditions"
  },
  {
    "tag": "taunt",
    "tag_definition": "has a skill that can inflict the taunt effect"
  },
  {
    "tag": "transformation",
    "tag_definition": "has a skill that transforms the shiki changing their skills, effects, or behavior"
  },
  {
    "tag": "true_damage",
    "tag_definition": "has a skill that inflicts true damage"
  },
  {
    "tag": "upper_hand",
    "tag_definition": "has a skill that activates at the start of a round or as soon as they spawn into battle"
  }
]