#!/usr/bin/env node
import greetUser from '../src/cli.js';
import { playGame } from './brain-even.js';

const name = greetUser();
playGame(name);
