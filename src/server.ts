import 'zone.js/node';

import express from 'express';
import { join } from 'node:path';

import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'node:fs';

import bootstrap from './main.server';
