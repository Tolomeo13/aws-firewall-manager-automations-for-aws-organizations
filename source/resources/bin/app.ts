/**
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */
import * as cdk from "@aws-cdk/core";
import { PreReqStack } from "../lib/prereq";
import { DemoStack } from "../lib/demo";
import { CommonResourceStack } from "../lib/common";
const app = new cdk.App();

// Prerequisite stack
new PreReqStack(app, "PreReqStack");

// Common resource stack with nested default policy stack
new CommonResourceStack(app, "CommonResourceStack");

// Demo Stack
new DemoStack(app, "DemoStack");
