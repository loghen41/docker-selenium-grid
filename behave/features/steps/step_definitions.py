from behave import given, when, then, step
from selenium.webdriver.common.keys import Keys
import time

@given('I navigate to google')
def navigate_to_google(context):
    context.browser.get("https://google.com")

@when('I enter {string} into the search bar')
def enter_for_search_bar(context, string):  # -- NOTE: number is converted into integer
    search_bar = context.browser.find_element_by_id("lst-ib")
    search_bar.send_keys(string)

@when('I clear the search bar')
def clear_search_bar(context):  # -- NOTE: number is converted into integer
    search_bar = context.browser.find_element_by_id("lst-ib")
    search_bar.send_keys(Keys.CONTROL, "a")
    search_bar.send_keys(Keys.DELETE)

@when('I wait for {number:d} seconds')
def behave_wait(context, number):
    time.sleep(float(number))

@then('The page should contain {string}')
def page_string(context, string):
    assert False == True