<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { rules, isRequired } from '../helpers/validators'
import { useField, useForm, useIsFormValid } from 'vee-validate'
import { NewBalOptionValue } from '@baloise/design-system-components'
import {
  BalCard,
  BalCardContent,
  BalField,
  BalFieldLabel,
  BalFieldControl,
  BalFieldMessage,
  BalButton,
  BalInput,
  BalRadioGroup,
  BalRadio,
  BalDatepicker,
  BalSelect,
  BalSelectOption,
  BalTextarea,
  BalCheckbox,
  BalHeading,
} from '@baloise/design-system-components-vue'

const { validate } = useForm()
const isFormValid = useIsFormValid()

const cantons = ref([
  NewBalOptionValue('AG', 'AG'),
  NewBalOptionValue('BS', 'BS'),
  NewBalOptionValue('BL', 'BL'),
  NewBalOptionValue('JU', 'JU'),
  NewBalOptionValue('SO', 'SO'),
])

const { value: gender, errorMessage: genderErrorMessage } = useField<string>('gender', rules([isRequired()]))
const { value: firstname, errorMessage: firstnameErrorMessage } = useField<string>('firstname', rules([isRequired()]))
const { value: lastname, errorMessage: lastnameErrorMessage } = useField<string>('lastname', rules([isRequired()]))
const { value: street, errorMessage: streetErrorMessage } = useField<string>('street', rules([isRequired()]))
const { value: postalCode, errorMessage: postalCodeErrorMessage } = useField<string>(
  'postalCode',
  rules([isRequired()]),
)
const { value: city, errorMessage: cityErrorMessage } = useField<string>('city', rules([isRequired()]))
const { value: birthdate, errorMessage: birthdateErrorMessage } = useField<string>('birthdate', rules([isRequired()]))
const { value: canton, errorMessage: cantonErrorMessage } = useField<string>('canton', rules([isRequired()]))
const { value: checkbox, errorMessage: checkboxErrorMessage } = useField<boolean>('checkbox', rules([isRequired()]))
const isCommentDisabled = ref(false)
const { value: comment, errorMessage: commentErrorMessage } = useField<string>(
  'comment',
  rules(isCommentDisabled, [isRequired()]),
)

async function onSubmit() {
  const { valid, errors } = await validate()
  console.log(valid, errors)
  alert('Form is submitted!')
}

function setCommentDisabled() {
  isCommentDisabled.value = true
}

function updateName() {
  firstname.value = 'Nancy'
  lastname.value = 'Miller'
}

onMounted(() => {
  gender.value = 'female'
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <BalCard class="mt-6 p-4">
      <BalHeading level="h4" title space="none">Reactive Form</BalHeading>
      <BalHeading level="h5" subtitle color="warning" space="bottom">
        Form is {{ isFormValid ? 'valid' : 'invalid' }}
      </BalHeading>
      <div class="columns is-multiline mt-0">
        <BalField class="column is-full py-0" expanded>
          <BalFieldControl>
            <BalRadioGroup value="male" v-model="gender">
              <BalRadio name="gender" value="male">Male</BalRadio>
              <BalRadio name="gender" value="female">Female</BalRadio>
            </BalRadioGroup>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ genderErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <BalField class="column is-half py-0" expanded>
          <BalFieldLabel required>Firstname</BalFieldLabel>
          <BalFieldControl>
            <BalInput v-model="firstname"></BalInput>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ firstnameErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <BalField class="column is-half py-0" expanded>
          <BalFieldLabel required>Lastname</BalFieldLabel>
          <BalFieldControl>
            <BalInput v-model="lastname"></BalInput>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ lastnameErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <BalField class="column is-half py-0" expanded>
          <BalFieldLabel required>Street</BalFieldLabel>
          <BalFieldControl>
            <BalInput v-model="street"></BalInput>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ streetErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <div class="column is-half pb-0">
          <div class="columns">
            <BalField class="column is-one-third py-0" expanded>
              <BalFieldLabel required>Postal Code</BalFieldLabel>
              <BalFieldControl>
                <BalInput v-model="postalCode" number-keyboard></BalInput>
              </BalFieldControl>
              <BalFieldMessage color="danger">
                {{ postalCodeErrorMessage }}
              </BalFieldMessage>
            </BalField>

            <BalField class="column is-two-thirds py-0" expanded>
              <BalFieldLabel required>City</BalFieldLabel>
              <BalFieldControl>
                <BalInput v-model="city"></BalInput>
              </BalFieldControl>
              <BalFieldMessage color="danger">
                {{ cityErrorMessage }}
              </BalFieldMessage>
            </BalField>
          </div>
        </div>

        <BalField class="column is-half py-0" expanded>
          <BalFieldLabel required>Canton</BalFieldLabel>
          <BalFieldControl>
            <BalSelect placeholder="Select your canton" v-model="canton" expanded>
              <BalSelectOption v-for="c in cantons" :key="c.value" :value="c.value" :label="c.label">
                {{ c.label }}
              </BalSelectOption>
            </BalSelect>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ cantonErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <BalField class="column is-half py-0" expanded>
          <BalFieldLabel required>Birthdate</BalFieldLabel>
          <BalFieldControl>
            <BalDatepicker placeholder="Select your birthdate" v-model="birthdate" expanded></BalDatepicker>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ birthdateErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <BalField class="column is-full py-0" expanded>
          <BalFieldControl>
            <BalCheckbox v-model="checkbox">Checkbox</BalCheckbox>
          </BalFieldControl>
          <BalFieldMessage color="danger">
            {{ checkboxErrorMessage }}
          </BalFieldMessage>
        </BalField>

        <BalField class="column is-full py-0" expanded :disabled="isCommentDisabled">
          <BalFieldLabel required>Comment</BalFieldLabel>
          <BalFieldControl>
            <BalTextarea v-model="comment" :disabled="isCommentDisabled"></BalTextarea>
          </BalFieldControl>
          <BalFieldMessage color="danger" v-if="!isCommentDisabled">
            {{ commentErrorMessage }}
          </BalFieldMessage>
        </BalField>
      </div>
      <div class="field is-grouped is-grouped-right">
        <BalButton class="control" @click="onSubmit">Submit</BalButton>
        <BalButton class="control" color="danger" outlined @click="setCommentDisabled">Disable Comment</BalButton>
        <BalButton class="control" color="info" outlined @click="updateName">Update Name</BalButton>
      </div>
    </BalCard>
  </form>
</template>
