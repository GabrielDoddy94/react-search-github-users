import { useState, useEffect } from "react";
import axios from "axios";

import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";

const rootUrl = "https://api.github.com";
