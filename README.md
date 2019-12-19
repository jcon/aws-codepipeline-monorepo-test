A proof of concept exploring monorepo builds in CodeBuild / CodeDeploy from a GitHub repository.
This repository builds off the ideas described in this [blog post](https://blog.codecentric.de/en/2019/05/codebuild-trigger-pipeline/), but implements them in CloudFormation.

# Instructions

The `infra/create-pipeline.sh` creates the pipeline (for the first time). To create the pipeline,
execute the following:

```bash
shell$ cd infra && ./create-pipeline.sh <a github personal access token>
```

The `infra/update-pipeline.sh` updates the existing stack for the pipeline.

# Projects

This monorepo contains four "packages":
- `foo` and `bar`, two libraries
- `main1` and `main2`, two main programs that each depend on `foo` and `bar`

The pipeline is setup for `main1` and only triggers when there are updates
to files under `packages/(foo|bar|main1)`. Changes to `main2` (alone) does
not trigger the pipeline.

The pipeline currently just listens to GitHub `PUSH` events on master, so builds
are only triggered when pushing to master.