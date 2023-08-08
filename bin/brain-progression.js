#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playGame from '../src/index.js';
import brainProgression from '../games/brain-progression.js';

const userName = greetUser();
playGame(brainProgression, userName);
